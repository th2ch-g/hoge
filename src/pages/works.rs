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
                <div
                    class="relative flex flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12"
                >
                    <Title title="Works" subtitle="" />
                    <div class="mx-auto max-w-screen-xl px-4 w-full">
                        <h2 class="mb-4 font-bold text-xl text-gray-600">{ "" }</h2>
                        <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">
                            <Card
                                url="https://th2ch-g.github.io/mogura/"
                                title="mogura"
                                content="A molecular graphic visualizer in Rust"
                                tag="#rust #webgpu #graphics #wasm"
                                image="https://raw.githubusercontent.com/th2ch-g/home/main/img/mogura-wasm.png"
                            />
                            <Card
                                url="https://github.com/th2ch-g/rust-top_message"
                                title="rust-top_message"
                                content="display your message on top command"
                                tag="#rust #omp #mpi #gpu"
                                image="https://raw.githubusercontent.com/th2ch-g/rust-top_message/main/img/logo.png"
                            />
                            <Card
                                url="https://github.com/th2ch-g/dotfiles"
                                title="dotfiles"
                                content="My dotfiles for UNIX"
                                tag="#unix #zsh #vim #tmux"
                                image="https://raw.githubusercontent.com/th2ch-g/dotfiles/main/others/example.png"
                            />
                            <Card
                                url="https://scholar-1-e4000274.deta.app/"
                                title="東京工業大学奨学金検索サイト"
                                content="Scholarship search website for TokyoTech"
                                tag="#react #fastapi #deta"
                                image="https://raw.githubusercontent.com/calliope-pro/scholar/main/TokyoTech_Scholar.png"
                            />
                            <Card
                                url="https://github.com/Kitaolab/PaCS-Toolkit"
                                title="PaCS-Toolkit"
                                content="Enhance sampling method of Molecular Dynamics Simulation for Protein"
                                tag="#molecular-simulation #python #hpc"
                                image="https://avatars.githubusercontent.com/u/58493563"
                            />
                            <Card
                                url="https://th2ch-g.github.io/brainfuck-rs/"
                                title="Brainfuck interpreter"
                                content="Brainfuck is a simple programming language, but Turing complete"
                                tag="#bf #compiler #rust #wasm"
                                image="https://raw.githubusercontent.com/th2ch-g/brainfuck-rs/main/example.png"
                            />
                            <Card
                                url="https://github.com/th2ch-g/tmplot.py/"
                                title="tmplot"
                                content="One liner Plotter that supports file and pipe input for quick description"
                                tag="#matplotlib #python #cli"
                                image="https://raw.githubusercontent.com/th2ch-g/home/main/img/tmplot.png"
                            />
                            <Card
                                url="https://www.kaggle.com/lst1923"
                                title="Kaggle"
                                content="Competition Expert"
                                tag="#python #ds #ml"
                                image="https://www.kaggle.com/static/images/logos/kaggle-logo-transparent-300.png"
                            />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        }
    }
}
