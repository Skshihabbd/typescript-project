{
  //
  // Generics with Interface
  interface Developer<T, X = null> {
    name: string;

    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  //   type elias
  type asus = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<asus> = {
    name: "rahim",
    computer: {
      brand: "asus",
      model: "probook",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  //   type interface
  interface hpRich {
    brand: string;
    model: string;
    heartTrack: boolean;
  }
  // type alias
  type yamahaBike = {
    brand: string;
    model: number;
  };

  const richDeveloper: Developer<hpRich, yamahaBike> = {
    name: "rahim",
    computer: {
      brand: "hp",
      model: "elitbook",
      releaseYear: 2012,
    },
    smartWatch: {
      brand: "apple",
      model: "w66",
      heartTrack: true,
    },
    bike: {
      brand: "yamaha",
      model: 2012,
    },
  };
  //
}
