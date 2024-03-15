use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props {
    #[prop_or_default]
    pub children: Children,
}

pub struct Layout;

impl Component for Layout {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, ctx: &Context<Self>) -> Html {
        html! {
            // https://tailwindcomponents.com/component/list-blog-post-tailwindcss
            <div class="relative flex flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
              <div class="min-h-28 ">
                <div class="max-w-screen-lg mx-auto py-4">
                    { for ctx.props().children.iter() }
                </div>
              </div>
            </div>
        }
    }
}
