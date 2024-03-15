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
            <div class="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div class="max-w-xl mx-auto sm:px-6 lg:px-8">
                    <div class="flex items-center pt-8 sm:justify-start sm:pt-0">
                        <div class="px-4 text-lg text-gray-500 border-r border-gray-400 tracking-wider">
                        {"404"}
                        </div>
                        <div class="ml-4 text-lg text-gray-500 uppercase tracking-wider">
                        {"Not Found"}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div>
            // https://tailwindcomponents.com/component/illustration-404-pages
            // <section class="bg-white dark:bg-gray-900 ">
            //     <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
            //         <div class="wf-ull lg:w-1/2">
            //             <p class="text-sm font-medium text-blue-500 dark:text-blue-400">{"404 error"}</p>
            //             <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">{"Page not found"}</h1>
            //             <p class="mt-4 text-gray-500 dark:text-gray-400">{"Sorry, the page you are looking for doesn't exist.Here are some helpful links:"}</p>
            //
            //             <div class="flex items-center mt-6 gap-x-3">
            //                 // <button class="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
            //                 //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 rtl:rotate-180">
            //                 //         <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            //                 //     </svg>
            //                 //     <span>{"Go back"}</span>
            //                 // </button>
            //                 <a href="/">
            //                     <button class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
            //                         {"Take me home"}
            //                     </button>
            //                 </a>
            //             </div>
            //         </div>
            //     </div>
            // </section>
        }
    }
}
