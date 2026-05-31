import React, { useEffect, useState } from "react";

const EMPTY_FORM = {
name: "",
description: "",
price: "",
category: "",
image: "",
};

export default function MenuItemModal({
isOpen,
onClose,
onSave,
editingItem,
}) {
const [formData, setFormData] =
useState(EMPTY_FORM);

const [errors, setErrors] = useState({});

useEffect(() => {
if (editingItem) {
setFormData(editingItem);
} else {
setFormData(EMPTY_FORM);
}
}, [editingItem]);

if (!isOpen) return null;

const validate = () => {
const newErrors = {};

```
if (!formData.name.trim())
  newErrors.name = "Name required";

if (!formData.description.trim())
  newErrors.description =
    "Description required";

if (!formData.category.trim())
  newErrors.category =
    "Category required";

if (
  !formData.price ||
  Number(formData.price) <= 0
) {
  newErrors.price =
    "Price must be greater than 0";
}

setErrors(newErrors);

return Object.keys(newErrors).length === 0;
```

};

const handleSubmit = (e) => {
e.preventDefault();

```
if (!validate()) return;

onSave({
  ...formData,
  price: Number(formData.price),
});
```

};

const updateField = (field, value) => {
setFormData((prev) => ({
...prev,
[field]: value,
}));
};

return (
<> <div
     className="fixed inset-0 z-40 bg-black/50"
     onClick={onClose}
   />

```
  <div className="fixed inset-x-4 top-10 z-50 rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-900">
    <h2 className="mb-6 text-xl font-bold dark:text-white">
      {editingItem
        ? "Edit Menu Item"
        : "Add Menu Item"}
    </h2>

    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <input
        type="text"
        placeholder="Item Name"
        value={formData.name}
        onChange={(e) =>
          updateField(
            "name",
            e.target.value
          )
        }
        className="w-full rounded-lg border p-3"
      />

      <textarea
        placeholder="Description"
        value={formData.description}
        onChange={(e) =>
          updateField(
            "description",
            e.target.value
          )
        }
        className="w-full rounded-lg border p-3"
      />

      <input
        type="number"
        step="0.01"
        placeholder="Price"
        value={formData.price}
        onChange={(e) =>
          updateField(
            "price",
            e.target.value
          )
        }
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        onChange={(e) =>
          updateField(
            "category",
            e.target.value
          )
        }
        className="w-full rounded-lg border p-3"
      />

      <input
        type="text"
        placeholder="Image URL"
        value={formData.image}
        onChange={(e) =>
          updateField(
            "image",
            e.target.value
          )
        }
        className="w-full rounded-lg border p-3"
      />

      {Object.keys(errors).length > 0 && (
        <div className="text-sm text-red-500">
          {Object.values(errors).map(
            (error) => (
              <p key={error}>{error}</p>
            )
          )}
        </div>
      )}

      <div className="flex gap-3">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-black py-3 text-white dark:bg-white dark:text-black"
        >
          Save
        </button>

        <button
          type="button"
          onClick={onClose}
          className="flex-1 rounded-lg border py-3"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</>
);
}
