# Cấu trúc project
Tất cả code được viết trong thư mục src
<pre>
.
|____/src
     |__/api
     |__/assets
     |__/components
		  |__/header
			   |__header.jsx
			   |__header.css
		  |__/footer
			   |__footer.jsx
			   |__footer.css
     |__/container
     |__/data
     |__/pages
	     |__/home
	     |__/shop
             |__/product_details
             |__/.....
     |__App.js
     |__index.js
</pre>
## Giải thích 1 số thư mục trong project

### `api`

Thư mục này chứac các api như userApi...

### `assets`

Thư mục chứa các hình ảnh, video, ...

### `components`

Thư mục chứa các component của 1 trang web. Đây là những UI components, chỉ có nhiệm vụ render theo yêu cầu, không xử lí logic, state ở đây (presentational components)

### `container`
Thư mục chứa các component xử lí logic cho các UI components. Đây là những components cha, có nhiệm vụ truyền các props cho các UI components (container  components)


### `data`
Các file json dữ liệu cho trang web như thông tin sản phẩm, bài blog, ...

### `page`
Các trang hoàn thiện của web, là tập hợp của các container components ghép thành

