import Header from "@/widgets/header";
import TreeView from "@/shared/ui/components/TreeView";
import { menuItems } from "./App.const";
import useSwitchState from "@/shared/hooks/useSwitchState";

function App() {
  const [isMenuOpen, switchMenuState] = useSwitchState(true);

  return (
    <div className="flex flex-col min-h-dvh">
      <Header className="grow-0" title="Home" onMenuClick={switchMenuState} />

      <main className="grow flex h-full">
        {isMenuOpen && (
          <section className="border-r p-2 min-w-[250px]">
            <TreeView items={menuItems} />
          </section>
        )}
        <section className="p-2">Content</section>
      </main>
    </div>
  );
}

export default App;
