const Product = require('../models/product.model');

const list = async (req, res) => {
    try {
        const product = await Product.find();
        res.render("index",{ product} );
    } catch (error) {
        res.status(500).send({ message: "có lỗi xảy ra khi lấy danh sách người dùng."});

    }
};

const showAddForm = (req, res) => {
    res.render('add');
};

// thêm người dùng 
const add = async (req, res) => {
    const { name, description, price, created_at } = req.body;
    const newProduct = new Product({ name, description, price, created_at});

    try {
        await newProduct.save();
        res.redirect('/');
    } catch (error) {
        console.error('Error when adding product:', error);
        res.status(400).send({ message: 'có lỗi xảy ra khi thêm người dùng.'});

    }
};

// hiểm thị form chỉnh sửa người dùng
const showEditForm = async( req , res) => {
    const productID = req.params.id;
    try {
        const product = await Product.findById(productID);
        if (!product) return res.status(404).send({ message: "người dùng không tồn tại"});
        res.render('edit', {product});
    } catch (error) {
        res.status(500).send({ message:  "có lổi xảy ra khi hiển thị form chỉnh sửa"})
    }
};

// chỉnh sửa người dùng 
const edit = async ( req, res) => {
    try {
        const updateProduct = await Product.findById(req.params.id, req,body);
        if (!updateProduct) return res.status(404).send({ message: 'người dùng không tồn tại '});
        res.redirect('/');
    } catch (error) {
        res.status(404).send({ message: 'cập nhật người dùng thất bại.'});

    }
};

const del = async (req, res) =>{
    const productID = req.params.id;
    try {
        const deteleProduct = await Product.findByIdAndDetele(productID);
        if(!deteleProduct) return res.status(404).send({ message:'người dùng không tồn tại.'});
        res.redirect('/');
    } catch (error) {
        res.status(404).send({ message: 'xóa người dùng thất bại.'});
    }
};
module.exports = { list, add, showAddForm, showEditForm, edit, del};