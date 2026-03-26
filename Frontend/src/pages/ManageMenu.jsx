// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import API from "../services/api";

// function ManageMenu() {
//   const { id } = useParams();
//   const [menuItems, setMenuItems] = useState([
//     { name: "", price: "", description: "" }
//   ]);

//   useEffect(() => {
//     const fetchRestaurant = async () => {
//       const res = await API.get(`/restaurants/${id}`);
//       if (res.data.menu && res.data.menu.length > 0) {
//         setMenuItems(res.data.menu);
//       }
//     };

//     fetchRestaurant();
//   }, [id]);

//   const handleChange = (index, field, value) => {
//     const updatedMenu = [...menuItems];
//     updatedMenu[index][field] = value;
//     setMenuItems(updatedMenu);
//   };

//   const addMenuItem = () => {
//     setMenuItems([
//       ...menuItems,
//       { name: "", price: "", description: "" }
//     ]);
//   };

//   const removeMenuItem = (index) => {
//     const updatedMenu = menuItems.filter((_, i) => i !== index);
//     setMenuItems(updatedMenu);
//   };

//   const handleSaveMenu = async () => {
//     try {
//       await API.put(`/restaurants/${id}/menu`, {
//         menu: menuItems
//       });
//       alert("Menu updated successfully");
//     } catch (error) {
//       alert("Failed to update menu");
//     }
//   };

//   return (
//     <div>
//       <h2>Manage Menu</h2>

//       {menuItems.map((item, index) => (
//         <div key={index}>
//           <input
//             type="text"
//             placeholder="Item name"
//             value={item.name}
//             onChange={(e) => handleChange(index, "name", e.target.value)}
//           />

//           <input
//             type="number"
//             placeholder="Price"
//             value={item.price}
//             onChange={(e) => handleChange(index, "price", e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Description"
//             value={item.description}
//             onChange={(e) => handleChange(index, "description", e.target.value)}
//           />

//           <button onClick={() => removeMenuItem(index)}>Remove</button>
//         </div>
//       ))}

//       <button onClick={addMenuItem}>Add More Item</button>
//       <button onClick={handleSaveMenu}>Save Menu</button>
//     </div>
//   );
// }

// export default ManageMenu;


import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import { 
  UtensilsCrossed, 
  Plus, 
  Trash2, 
  Save, 
  ChevronLeft, 
  IndianRupee, 
  Type, 
  AlignLeft 
} from "lucide-react";

function ManageMenu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menuItems, setMenuItems] = useState([
    { name: "", price: "", description: "" }
  ]);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await API.get(`/restaurants/${id}`);
        if (res.data.menu && res.data.menu.length > 0) {
          setMenuItems(res.data.menu);
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchRestaurant();
  }, [id]);

  const handleChange = (index, field, value) => {
    const updatedMenu = [...menuItems];
    updatedMenu[index][field] = value;
    setMenuItems(updatedMenu);
  };

  const addMenuItem = () => {
    setMenuItems([
      ...menuItems,
      { name: "", price: "", description: "" }
    ]);
  };

  const removeMenuItem = (index) => {
    const updatedMenu = menuItems.filter((_, i) => i !== index);
    setMenuItems(updatedMenu);
  };

  const handleSaveMenu = async () => {
    try {
      await API.put(`/restaurants/${id}/menu`, {
        menu: menuItems
      });
      alert("✅ Menu updated successfully");
      navigate("/owner");
    } catch (error) {
      alert("❌ Failed to update menu");
    }
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen pt-28 pb-20 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        
        {/* --- Header Section --- */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate("/owner")}
              className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 hover:bg-orange-50 hover:text-orange-500 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900">Manage Menu</h1>
              <p className="text-gray-500 text-sm">Craft your restaurant's culinary offerings</p>
            </div>
          </div>
          
          <button 
            onClick={handleSaveMenu}
            className="hidden md:flex items-center space-x-2 bg-gray-900 hover:bg-orange-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg transition-all active:scale-95"
          >
            <Save size={18} />
            <span>SAVE MENU</span>
          </button>
        </div>

        {/* --- Menu Items Editor --- */}
        <div className="space-y-6">
          {menuItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-[2.5rem] shadow-sm border border-gray-100 relative group transition-all hover:shadow-md"
            >
              {/* Item Number Badge */}
              <div className="absolute -left-3 top-8 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-lg">
                {index + 1}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Item Name */}
                <div className="md:col-span-8 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 flex items-center">
                    <Type size={12} className="mr-1" /> Dish Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Butter Chicken Premium"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 text-gray-900 font-semibold focus:bg-white focus:border-orange-500 outline-none transition-all"
                    value={item.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                  />
                </div>

                {/* Item Price */}
                <div className="md:col-span-4 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 flex items-center">
                    <IndianRupee size={12} className="mr-1" /> Price
                  </label>
                  <input
                    type="number"
                    placeholder="499"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 text-gray-900 font-semibold focus:bg-white focus:border-orange-500 outline-none transition-all"
                    value={item.price}
                    onChange={(e) => handleChange(index, "price", e.target.value)}
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-11 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1 flex items-center">
                    <AlignLeft size={12} className="mr-1" /> Description
                  </label>
                  <textarea
                    rows="2"
                    placeholder="Describe the ingredients and taste..."
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 text-gray-900 font-medium focus:bg-white focus:border-orange-500 outline-none transition-all resize-none"
                    value={item.description}
                    onChange={(e) => handleChange(index, "description", e.target.value)}
                  />
                </div>

                {/* Remove Button */}
                <div className="md:col-span-1 flex items-end justify-center pb-2">
                  <button 
                    onClick={() => removeMenuItem(index)}
                    className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                    title="Remove Item"
                  >
                    <Trash2 size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Bottom Actions --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <button 
            onClick={addMenuItem}
            className="flex items-center space-x-2 text-orange-600 font-bold hover:bg-orange-50 px-6 py-3 rounded-2xl border-2 border-dashed border-orange-200 transition-all w-full md:w-auto justify-center"
          >
            <Plus size={20} />
            <span>ADD ANOTHER ITEM</span>
          </button>

          <button 
            onClick={handleSaveMenu}
            className="md:hidden w-full bg-gray-900 text-white font-bold py-5 rounded-2xl shadow-xl active:scale-95 transition-all flex items-center justify-center space-x-2"
          >
            <Save size={20} />
            <span>SAVE MENU</span>
          </button>
        </div>

        {/* --- Empty State --- */}
        {menuItems.length === 0 && (
          <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <UtensilsCrossed size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 font-medium italic">Your menu is empty. Start adding delicious dishes!</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default ManageMenu;