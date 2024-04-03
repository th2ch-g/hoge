use wasm_bindgen::prelude::*;
use web_sys::wasm_bindgen::JsCast;

pub async fn fetch_text(url: &str) -> Result<String, JsValue> {
    let mut opts = web_sys::RequestInit::new();
    opts.method("GET");
    opts.mode(web_sys::RequestMode::Cors);
    let request = web_sys::Request::new_with_str_and_init(url, &opts)?;
    let window = gloo::utils::window();
    let resp_value =
        wasm_bindgen_futures::JsFuture::from(window.fetch_with_request(&request)).await?;
    let resp: web_sys::Response = resp_value.dyn_into().unwrap();
    let text = wasm_bindgen_futures::JsFuture::from(resp.text()?).await?;
    Ok(text.as_string().unwrap())
}

pub enum FetchState<T> {
    NotFetching,
    Fetching,
    Success(T),
    Failed,
}

pub enum Msg {
    SetState(FetchState<String>),
    GetState,
}
