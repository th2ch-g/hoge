use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IndexPage;

impl Component for IndexPage {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            // <h1>
            //     { "Hello world" }
            // </h1>
            <p class="bg-red-100">{"Test!"}</p>
        }
    }
}
