use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props {
    pub title: String,
    pub subtitle: String,
}

pub struct Title;

impl Component for Title {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
                    { &ctx.props().title }
                </h2>
                <p class="text-center mt-4 font-medium text-slate-500">{ &ctx.props().subtitle }</p>
            </div>
        }
    }
}
