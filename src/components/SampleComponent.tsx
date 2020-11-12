import { observer } from "mobx-react-lite";
import Link from "next/link";
import React, { useEffect } from "react";
import { TStore, useStore } from "../stores";
import Clock from "./Clock";

interface IOwnProps {
  store?: TStore;
  title: string;
  linkTo: string;
}

const SampleComponent: React.FC<IOwnProps> = observer((props) => {
  const { lastUpdate, light, start, stop } = useStore("");

  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, [start, stop]);

  return (
    <div>
      <h1>{props.title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
    </div>
  );
});

export default SampleComponent;
