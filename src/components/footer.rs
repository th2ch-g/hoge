use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct Footer;

impl Component for Footer {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            // https://tailwindcomponents.com/component/simple-footer-1
            <footer class="footer footer-center  w-full p-4 bg-gray-300 text-gray-800">
                <div class="text-center">
                    <p>
                        { "© " }
                        <a class="font-semibold">{ "th2ch-g" }</a>
                    </p>
                </div>
            </footer>
        }
    }
}
