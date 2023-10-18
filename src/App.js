import RandomImages from "./components/RandomImages";

function App() {
    return (
        <>
            <h1
                style={{
                    fontWeight: "500",
                    textAlign: "center",
                    marginBottom: "30px",
                    fontStyle: "italic",
                }}
            >
                Рисунки по ващему запросу
            </h1>
            <RandomImages />
        </>
    );
}

export default App;
