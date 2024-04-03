use crate::components::card::Card;
use crate::components::footer::Footer;
use crate::components::layout::Layout;
use crate::components::navbar::Navbar;
use crate::components::title::Title;
use crate::util::fetch::fetch_text;
use crate::util::fetch::FetchState;
use crate::util::fetch::Msg;
use crate::util::var::BLOG_META_JSON;
use crate::Routes;
use yew::prelude::*;
use yew_router::components::Link;

#[derive(PartialEq, Properties)]
pub struct Props;

pub struct BlogList {
    meta: FetchState<String>,
}

#[derive(serde::Deserialize, serde::Serialize)]
pub struct BlogMeta {
    target: String,
    title: String,
    description: String,
    image: String,
}

#[derive(serde::Deserialize, serde::Serialize)]
pub struct BlogMetaList(Vec<BlogMeta>);

impl Iterator for BlogMetaList {
    type Item = BlogMeta;
    fn next(&mut self) -> Option<Self::Item> {
        self.0.pop()
    }
}

impl Component for BlogList {
    type Message = Msg;
    type Properties = Props;

    fn create(ctx: &Context<Self>) -> Self {
        ctx.link().send_message(Msg::GetState);
        Self {
            meta: FetchState::NotFetching,
        }
    }

    fn update(&mut self, ctx: &Context<Self>, msg: Self::Message) -> bool {
        match msg {
            Msg::SetState(state) => {
                self.meta = state;
                true
            }
            Msg::GetState => {
                ctx.link().send_future(async {
                    match fetch_text(BLOG_META_JSON).await {
                        Ok(s) => Msg::SetState(FetchState::Success(s)),
                        Err(_) => Msg::SetState(FetchState::Failed),
                    }
                });
                ctx.link().send_message(Msg::SetState(FetchState::Fetching));
                false
            }
        }
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        let content = match &self.meta {
            FetchState::NotFetching => html! {
                <></>
            },
            FetchState::Fetching => html! {
                <></>
            },
            FetchState::Success(meta) => {
                let json_data: BlogMetaList = serde_json::from_str(meta).unwrap();
                html! {
                  <div class="grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-6">

                  {
                      json_data
                          .map(|meta| {
                              html! {
                                  <Link<Routes> classes="block" to={Routes::Blog { id: meta.target.clone()  }}>
                                  <Card
                                      url={""}
                                      title={meta.title}
                                      content={""}
                                      tag={meta.description}
                                      image={meta.image}
                                  />
                                  </Link<Routes>>
                              }
                          })
                      .collect::<Html>()
                  }

                  </div>
                }
            }
            FetchState::Failed => html! {
                <></>
            },
        };

        html! {
            <div>
                <Navbar />
                  <Layout>
                    <Title title={"Blog"} subtitle={""} />
                      {content}
                  </Layout>
                <Footer />
            </div>
        }
    }
}
