import { Button } from "./shared/components/ui/Button";

function App() {
  return (
    <>
      <div className="flex items-center gap-p5 ml-20 mt-20">
        <Button size="sm">Get started</Button>
        <Button size="md" variant="secondary">
          How to use
        </Button>
        <Button size="lg" variant="secondary">
          Dashboard
        </Button>
      </div>
    </>
  );
}

export default App;
