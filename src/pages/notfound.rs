use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct NotFound;

impl Component for NotFound {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <Navbar />
                // https://tailwindcomponents.com/component/404-page-templates
                <div
                    class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0"
                >
                    <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                        <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                            <div
                                class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider"
                            >
                                { "404" }
                            </div>
                            <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                                { "Not Found" }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        }
    }
}
