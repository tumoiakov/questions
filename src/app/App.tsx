import Header from "@/widgets/header";
import useSwitchState from "@/shared/hooks/useSwitchState";
import MainMenu from "@/widgets/MainMenu";
import Editor from "@/shared/ui/components/Editor";

function App() {
  const [isMenuOpen, switchMenuState] = useSwitchState(true);

  return (
    <div className="flex flex-col min-h-dvh max-h-dvh overflow-hidden">
      <Header
        className="grow-0"
        title="Главная"
        onMenuClick={switchMenuState}
      />

      <main className="grow flex h-full max-h-full overflow-hidden">
        <MainMenu isOpen={isMenuOpen} />
        <section className="p-4 w-full max-w-full max-h-full flex flex-col items-center overflow-auto">
          <Editor />
        </section>
      </main>
    </div>
  );
}

export default App;
