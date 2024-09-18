import { Menu } from "../models/menu.model.js";

export const getAllMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    if (!menus)
      return res.status(400).json({ message: "Menus Doesn't Exists" });
    return res.status(200).json(menus);
  } catch (error) {
    return res.status(200).json(error);
  }
};

export const addNewMenu = async (req, res) => {
  try {
    const menuName = req.body.menu_name;
    const existingMenu = await Menu.find(menuName);
    if (existingMenu)
      return res.status(400).json({ message: "Menu Already exists" });

    const menu = new Menu(req.body);
    await menu.save();
    return res
      .status(200)
      .json({ success: true, message: "New Menu Created", menu });
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: "Error while creating Menu" });
  }
};

export const updateMenu = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedMenu = await Menu.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedMenu) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.status(200).json(updatedMenu);
  } catch (error) {
    res.status(500).json({ message: "Error updating Menu", error });
  }
};

export const getMenuById = async (req, res) => {
  try {
    const {id} = req.params;
    const menu = await Menu.findById(id);
    if(!menu) return res.status(404).json({message:'No such Menu'});
    return res.status(200).json(menu);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const deleteMenu = async (req,res) =>{
    try {
        const {id} = req.params;
        const menu =  await Menu.findByIdAndDelete(id);
        if(!menu) return res.status(404).json({message:'No Menu or Already Deleted'});
        return res.status(200).json({message:'Deleted Successfully'});
    } catch (error) {
        return res.status(400).json({message:'Error  while Deleted'});
    }
}
