import React from "react";
import renderer from "react-test-renderer";
import Home from "./Home";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "../../core/ioc/ioc.react";
import { container } from "../../core/ioc/ioc";

test("Home render", () => {
  const queryClient = new QueryClient();

  const component = renderer.create(
    <Provider container={container}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Home />
        </Router>
      </QueryClientProvider>
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
