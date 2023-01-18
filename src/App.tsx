import { QueryClient,QueryClientProvider } from "react-query";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import { DeletedPage, HomePage, NotFoundPage, TodoListPage } from "src/pages";

import Layout from "./components/Layout/Layout";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="todo_list/:listId" element={<TodoListPage />} />
            <Route path="deleted" element={<DeletedPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
