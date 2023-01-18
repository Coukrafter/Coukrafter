import DeletedItemsList from "./components/DeletedItemsList";

export default function DeletedPage() {
  return (
    <div className="py-10 px-20 flex flex-col gap-8">
      <div>
        <h1 className="text-3xl">Deleted items</h1>
      </div>
      <DeletedItemsList />
    </div>
  );
}
