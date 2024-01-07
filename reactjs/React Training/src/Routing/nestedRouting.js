
import {Routes, Route, Link, useParams} from "react-router-dom";
function Home() {
    return <h3>Home Page</h3>;
}
function WidgetDemo() {
    return (
        <div className="row">
            <div className="sidebar">
                Sidebar
            </div>
            <div className="main">
                <div className="navbar">
                    <Link to='/widget/map'>Map</Link>&nbsp;
                    <Link to='/widget/chart'>Chart</Link>&nbsp;
                    <Link to='/widget/table'>Table</Link>
                </div>

                <Routes>
                    <Route path='/' element={<h3>Please select a widget.</h3>} />
                    <Route path='/:widgetName' element={<Widget />}></Route>
                </Routes>

            </div>
        </div>
    )
}

function Widget() {
    console.log(useParams());
    let { widgetName } = useParams();
    console.log("Widgetname is", widgetName)
    return (
        <div>
            <h3>Widget: {widgetName}</h3>
        </div>
    );
}
export const NestedRouting = () => {
    return (
        <div className="Dashboard">
            <div className="navbar">
                <Link to="/">Home</Link>&nbsp;
                <Link to="/widget">WidgetDemo</Link>
            </div>

            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/widget" element={<WidgetDemo />}>
                    <Route path=":widgetName" element={<WidgetDemo />} />
                </Route>
            </Routes>

        </div>
    );
}

