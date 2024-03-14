use yew::prelude::*;
use yew_router::prelude::*;

mod pages;
mod components;

struct App;

impl Component for App {
    type Message = ();
    type Properties = ();

    fn create(_ctx: &Context<Self>) -> Self {
        Self
    }

    fn update(&mut self, _ctx: &Context<Self>, _msg: Self::Message) -> bool {
        false
    }

    fn view(&self, _ctx: &Context<Self>) -> Html {
        html! {
            <BrowserRouter>
                <main>
                    <Switch<Routes> render={switch} />
                </main>
            </BrowserRouter>
        }
    }
}


fn main() {
    yew::Renderer::<App>::new().render();
}


#[derive(Routable, PartialEq, Eq, Clone, Debug)]
enum Routes {
    #[at("/")]
    Home,
}

fn switch(routes: Routes) -> Html {
    match routes {
        Routes::Home => html! { <pages::index::IndexPage /> }
        // Routes::Home => html! { <h1>{"hello"}</h1> }
    }
}
