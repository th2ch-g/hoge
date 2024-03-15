use crate::components::footer::Footer;
use crate::components::layout::Layout;
use crate::components::navbar::Navbar;
use crate::icons::gist::IconGist;
use crate::icons::github::IconGithub;
use crate::icons::home::IconHome;
use crate::icons::kaggle::IconKaggle;
use crate::icons::linkedin::IconLinkedin;
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
                      <h2 class="font-bold text-center text-6xl text-slate-700 font-display">
                      {"th2ch-g"}
                      </h2>
                      <p class="text-center mt-4 font-medium text-slate-500">{"homepage built by yew"}</p>
                      <div class="flex gap-6 mt-20 justify-center">
                        <IconHome />
                        <IconGithub />
                        <IconGist />
                        <IconKaggle />
                        <IconLinkedin />
                      </div>
                      <div class="flex gap-6 mt-20 justify-center">
                        <img src="img/daiowasabi1.jpg" width=400 height=200 />
                      </div>
                </Layout>
              // <Footer />
            </div>
        }
    }
}
