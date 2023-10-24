import MyCmp from "./components/MyCmp";
import MyLayout from "./layouts/MyLayout";

export default function App() {
    return (
        <div>
            <MyLayout>
                <h2></h2>
                <MyCmp title={"hello froom chilren"}/>
            </MyLayout>
        </div>
    )
}