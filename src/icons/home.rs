use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IconHome;

impl Component for IconHome {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <a href="https://github.com/th2ch-g/home" class="inline-block col-span-1 text-gray-300 transition-all hover:text-gray-400" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#1C274C"
                  strokeLinecap="round"
                  strokeWidth={1.5}
                  d="M22 22H2M2 11l4.063-3.25M22 11l-8.126-6.5a3 3 0 0 0-3.748 0l-.782.625M15.5 5.5v-2A.5.5 0 0 1 16 3h2.5a.5.5 0 0 1 .5.5v5M4 22V9.5M20 9.5v4m0 8.5v-4.5"
                />
                <path
                  stroke="#1C274C"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44M9 22v-5"
                />
                <path
                  stroke="#1C274C"
                  strokeWidth={1.5}
                  d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </a>
        }
    }
}
