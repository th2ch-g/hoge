use crate::components::card::Card;
use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct Works;

impl Component for Works {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
                <Navbar />

                <div class="relative flex flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
                  <h2 class="font-bold text-center text-6xl text-slate-700 font-display mb-6">
                  {"Works"}
                  </h2>
                  <div class="mx-auto max-w-screen-xl px-4 w-full">
                    <h2 class="mb-4 font-bold text-xl text-gray-600">
                    {""}
                    </h2>
                    <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

                      <Card
                        url={"https://github.com/th2ch-g/rust-top_message"}
                        title={"rust-top_message"}
                        content={"display your message on top command"}
                        tag={"Rust, OMP/MPI/GPU"}
                        image={"https://raw.githubusercontent.com/th2ch-g/rust-top_message/main/img/logo.png"}
                      />

                     <Card
                        url={"https://scholar-1-e4000274.deta.app/"}
                        title={"東京工業大学奨学金検索サイト"}
                        content={"Scholarship search website for TokyoTech"}
                        tag={"React, FastAPI, deta"}
                        image={"https://raw.githubusercontent.com/calliope-pro/scholar/main/TokyoTech_Scholar.png"}
                     />

                    </div>
                  </div>
                </div>

                <Footer />
            </div>
        }
    }
}
