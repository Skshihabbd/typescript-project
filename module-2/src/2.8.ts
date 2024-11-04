{
  //
  type todo = {
    userId: number;
    id: number;
    title: string;
    body: number;
  };
  //   real json plaseholder api data fetc
  const getTodo = async (): Promise<todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(typeof data.body);
    return data;
  };

  const info = getTodo();
  console.log(info);
  // typescript Promise
  const CreatePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "t";
      if (data) {
        resolve(data);
      } else {
        reject("failed to Load data");
      }
    });
  };

  //   call the created promise function
  const showData = async (): Promise<string> => {
    const data = await CreatePromise();
    // console.log(data);
    return data;
  };
  showData();
  //
}
