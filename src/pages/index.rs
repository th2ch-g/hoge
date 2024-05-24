use crate::components::footer::Footer;
use crate::components::icons::github::IconGithub;
use crate::components::icons::home::IconHome;
use crate::components::icons::kaggle::IconKaggle;
use crate::components::icons::linkedin::IconLinkedin;
use crate::components::layout::Layout;
use crate::components::navbar::Navbar;
use crate::components::title::Title;
use yew::prelude::*;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct IndexPage;

impl Component for IndexPage {
    type Message = ();
    type Properties = Props;

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <div>
              <Navbar />
                // https://tailwindcomponents.com/component/list-blog-post-tailwindcss
                <Layout>
                  <Title title={"th2ch-g"} subtitle={"homepage built with yew+tailwindcss"} />

                  <div class="flex gap-6 mt-20 justify-center">
                    <IconHome />
                    <IconGithub />
                    <IconKaggle />
                    <IconLinkedin />
                  </div>

                  // // todo!("component")
                  // <div class="bg-slate-100 justify-center p-4 text-sm font-semibold backdrop-blur-sm">
                  //     // <p class="text-center text-slate-500">{"LANG"}</p>
                  //     <ul
                  //         class="flex mt-4 flex-wrap items-center justify-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
                  //         <li>{"Rust"}</li>
                  //         <li>{"Python"}</li>
                  //         <li>{"Bioinformatics"}</li>
                  //     </ul>
                  // </div>

                  <div class="flex gap-6 mt-20 justify-center">
                    <img src="https://raw.githubusercontent.com/th2ch-g/home/main/img/daiowasabi1.jpg" width=400 height=200 />
                  </div>


                  // comment
                    <div class="flex mt-20 justify-center w-full">
                      <details class="w-full max-w-3xl">
                        <summary class="text-center cursor-pointer mt-10">{"Open comment"}</summary>
                        <div class="p-4 bg-white border rounded-md">
                          <Title title={""} subtitle={"Comments to this content via your github account"} />
                          <script
                            src="https://utteranc.es/client.js"
                            repo="th2ch-g/home"
                            issue-term="pathname"
                            theme="github-light"
                            crossorigin="anonymous"
                            async=true
                          ></script>
                        </div>
                      </details>
                    </div>
                </Layout>
              <Footer />

            </div>
        }
    }
}
