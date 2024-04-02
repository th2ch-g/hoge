use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use crate::components::markdown::Markdown;
use crate::components::layout::Layout;
use crate::components::card::Card;
use crate::components::title::Title;
use yew::prelude::*;
use web_sys::wasm_bindgen::JsCast;
use wasm_bindgen::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct Blog {
    meta: String,
}

#[derive(serde::Deserialize, serde::Serialize)]
pub struct BlogMeta {
    title: String,
    description: String,
    emoji: String,
    is_lished: bool,
    created_at: String,
}

#[derive(serde::Deserialize, serde::Serialize)]
pub struct BlogMetaList(Vec<BlogMeta>);

impl Iterator for BlogMetaList {
  type Item = BlogMeta;
  fn next(&mut self) -> Option<Self::Item> {
    self.0.pop()
  }
}

const BLOG_META_JSON: &str = "https://raw.githubusercontent.com/mayone-du/blog-contents/main/meta/article_list.json";


async fn fetch_text(url: &str) -> Result<String, JsValue> {
    let mut opts = web_sys::RequestInit::new();
    opts.method("GET");
    opts.mode(web_sys::RequestMode::Cors);
    let request = web_sys::Request::new_with_str_and_init(url, &opts)?;
    let window = gloo::utils::window();
    let resp_value = wasm_bindgen_futures::JsFuture::from(window.fetch_with_request(&request)).await?;
    let resp: web_sys::Response = resp_value.dyn_into().unwrap();
    let text = wasm_bindgen_futures::JsFuture::from(resp.text()?).await?;
    Ok(text.as_string().unwrap())
}


impl Component for Blog {
    type Message = String;
    type Properties = Props;

    fn create(ctx: &Context<Self>) -> Self {
        // Self {
        //     meta: match fetch_text(url) {
        //         Ok(s) => s,
        //         Err(_) => String::from(""),
        //     }
        // }

        Self {
            meta: String::from(""),
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        let url = "https://raw.githubusercontent.com/mayone-du/blog-contents/main/meta/article_list.json";
        ctx.link().send_future(async move {
            match fetch_text(url).await {
            Ok(s) => s.to_string(),
            Err(_) => String::from(""),
        }});
        self.meta = msg;
        true
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        // let url = "https://raw.githubusercontent.com/mayone-du/blog-contents/main/meta/article_list.json";
        // let meta = match fetch_text(url) {
        //     Ok(s) => s,
        //     Err(_) => String::from(""),
        // };
        // let json_data: BlogMetaList = serde_json::from_str(&self.meta).unwrap();
        html! {
            <div>
                <Navbar />
                  <Layout>
                    <Title title={"Blog"} subtitle={""} />
                      // <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                      //
                      // {
                      //     json_data
                      //         .map(|meta| {
                      //             html! {
                      //                 <Card
                      //                     url={""}
                      //                     title={""}
                      //                     content={""}
                      //                     tag={""}
                      //                     image={""}
                      //                 />
                      //             }
                      //         })
                      //     .collect::<Html>()
                      // }
                      //
                      // </div>

                    <div class="flex gap-6 mt-20 justify-center lg:col-span-2 col-span-3 border border-gray-100 rounded-lg p-4 bg-white grid lg:gap-6 gap-4">
                      <Markdown markdown_data={include_str!("../../../test.md")}/>
                    </div>

                  </Layout>
                <Footer />
            </div>
        }
    }
}
