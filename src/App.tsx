import { Button, Text } from "./shared-components";

function App() {
  return (
    <div>
      <Button variant="destructive" size="sm">
        Click Me!!
      </Button>
      <Text variant="headerLarge" weight="bold">
        Something Went Wrong. Oops!!
      </Text>
    </div>
  );
}

export default App;
