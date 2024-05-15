use crate::components::card::Card;
use crate::components::footer::Footer;
use crate::components::navbar::Navbar;
use crate::components::title::Title;
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
                  <Title title={"Works"} subtitle={""} />

                  <div class="mx-auto max-w-screen-xl px-4 w-full">
                    <h2 class="mb-4 font-bold text-xl text-gray-600">
                    {""}
                    </h2>
                    <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

                      <Card
                        url={"https://th2ch-g.github.io/mogura/"}
                        title={"mogura"}
                        content={"A molecular visualizer in Rust"}
                        tag={"Rust, WebGPU, Graphics, Wasm"}
                        image={"https://raw.githubusercontent.com/th2ch-g/home/main/img/mogura-wasm.png"}
                      />

                      <Card
                        url={"https://github.com/th2ch-g/rust-top_message"}
                        title={"rust-top_message"}
                        content={"display your message on top command"}
                        tag={"Rust, OMP/MPI/GPU"}
                        image={"https://raw.githubusercontent.com/th2ch-g/rust-top_message/main/img/logo.png"}
                      />

                      <Card
                        url={"https://github.com/th2ch-g/dotfiles"}
                        title={"dotfiles"}
                        content={"My dotfiles for UNIX"}
                        tag={"UNIX, zsh, vim, tmux"}
                        image={"https://raw.githubusercontent.com/th2ch-g/dotfiles/main/others/example.png"}
                      />

                     <Card
                        url={"https://scholar-1-e4000274.deta.app/"}
                        title={"東京工業大学奨学金検索サイト"}
                        content={"Scholarship search website for TokyoTech"}
                        tag={"React, FastAPI, deta"}
                        image={"https://raw.githubusercontent.com/calliope-pro/scholar/main/TokyoTech_Scholar.png"}
                     />

                     <Card
                        url={"https://github.com/Kitaolab/PaCS-Toolkit"}
                        title={"PaCS-Toolkit"}
                        content={"Enhance sampling method of Molecular Dynamics Simulation for Protein"}
                        tag={"MD simulation, Python, HPC"}
                        image={"https://avatars.githubusercontent.com/u/58493563"}
                     />

                    </div>
                  </div>
                </div>

                <Footer />
            </div>
        }
    }
}
