use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct Navbar;

impl Component for Navbar {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            // https://tailwindcomponents.com/component/arti-mehra
            // <header class="bg-gray-100 py-4">
            //     <nav class="container mx-auto flex justify-between items-center">
            //         <div class="logo">{"Ayurvedic"}</div>
            //         <ul class="flex items-center">
            //             <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">{"Home"}</a></li>
            //             <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">{"About Us"}</a></li>
            //             <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">{"Services"}</a></li>
            //             <li class="mr-6"><a href="#" class="text-gray-700 hover:text-gray-900">{"Products"}</a></li>
            //             <li><a href="#" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{"Contact Us"}</a></li>
            //         </ul>
            //     </nav>
            // </header>

            // https://tailwindcomponents.com/component/simple-navbar-3
            <nav class="bg-white shadow dark:bg-gray-800">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    // <a href="/" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">{"home"}</a>
                    <a href="/" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{"home"}</a>
                    <a href="/works" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{"works"}</a>
                    <a href="/blog" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">{"blog"}</a>
                </div>
            </nav>
        }
    }
}
