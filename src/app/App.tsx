import Header from "@/widgets/header";
import useSwitchState from "@/shared/hooks/useSwitchState";
import MainMenu from "@/widgets/MainMenu";
import { Plate, PlateContent } from "@udecode/plate-common";

function App() {
  const [isMenuOpen, switchMenuState] = useSwitchState(true);

  return (
    <div className="flex flex-col min-h-dvh">
      <Header className="grow-0" title="Home" onMenuClick={switchMenuState} />

      <main className="grow flex h-full">
        <MainMenu isOpen={isMenuOpen} />
        <section className="p-2 w-full ">
          <Plate>
            <PlateContent className="w-full caret-transparent" placeholder="Type..." />
          </Plate>
        </section>
      </main>
    </div>
  );
}

export default App;
