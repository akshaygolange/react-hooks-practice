import useFetch from ".";

export default function UseFetchHookDemo() {
  const { data, error, loading } = useFetch(`https://dummyjson.com/carts`, {});

  console.log("data->>", data?.carts);

  //   data?.carts?.forEach(({ id, products }) => {
  //     // console.log(products);

  //     products?.forEach(({ id, title, price }) => {
  //       console.log("title->>", title);
  //       console.log("price->>", price);
  //       console.log("id->>", id);
  //     });
  //   });

  return (
    <div>
      <h1>USe Fetch Hook</h1>

      {loading ? <h2>Loading Carts...</h2> : null}

      <div>
        {data?.carts?.map(({ id, products }) => (
          <div key={id}>
            <ul>
              {products?.map(({ id, title, price }) => (
                <li key={id}>
                  <h2>
                    {title}| ${price} |{id}
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {}
    </div>
  );
}
