import Filters from "./components/Filters/Filters";
import TodoList from "./components/TodoList/TodoList";

function App() {
    return (
        <div
            style={{
                backgroundColor: "#fff",
                width: 500,
                height: 750,
                borderRadius: 8,
                boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1
                style={{
                    textAlign: "center",
                    marginBottom: "16px",
                    fontSize: "36px",
                    fontWeight: "600",
                }}
            >
                Todo App with Redux
            </h1>

            <Filters />

            <div
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "rgb(239 239 239)",
                    margin: "28px 0",
                }}
            ></div>

            <TodoList />
        </div>
    );
}

export default App;
