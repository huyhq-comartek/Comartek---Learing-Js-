# SCOPE
- Global: biến toàn cục.
- Block: const, let - khai báo trong khối mã.
- Local: var, function - khai báo trong phạm vi function.

# Floating point
- Do bộ nhớ máy tính là có hạn, ta không thể lưu con số với độ chính xác tuyệt đối.
- Xử lý bằng cách: sử dụng thư viện, sử dụng .toFixed(), .toPrecision(), các hàm làm tròn của Math.

# Reference và Value
# Reference
- Tham chiếu là gán địa chỉ ô nhớ của một biến cho một biến khác hoặc truyền địa chỉ ô nhớ một function.
- Thay đổi giá trị của biến khác đó hoặc thay đổi giá trị biến tham chiếu truyền vào trong function
sẽ khiến giá trị của biến tham chiếu tới thay đổi theo.
- Kiểu dữ liệu tham chiếu là Object.

# Value
- Tham trị là truyền giá trị của một biến cho một hàm hoặc gán giá trị của một biến cho biến khác.
- Thay đổi giá trị của biến bị gán hoặc thay đổi giá trị khi biến đã đc truyền vào trong hàm thì ko làm
thay đổi giá trị của biến ban đầu.
- Kiểu dữ liệu tham trị là các kiểu dữ liệu nguyên thủy.

# Null và Undefined
- null là giá trị được gán cho biến còn undefined là do biến đó ko đc gán giá trị lúc khởi tạo.

# Null
- Null là không có gì hay không có giá trị.
- Giá trị null được gán cho biến đại diện cho biến đó ko có giá trị.
- Kiểu dữ liệu của null là object.

# Undefined
- Undefined là ko đc định nghĩa.
- Một biến là undefined khi biến đó ko đc gắn giá trị lúc khởi tạo.
- Kiểu dữ liệu của undefined là undefined.

# Equal(==) & Strict Equal(===)
- == : các biến khi so sánh sẽ được đổi về cùng 1 kiểu dữ liệu và sau đó so sánh giá trị, trả về true khi giá trị 2 biến sau khi đổi bằng nhau.
- === : so sánh kiểu giá trị và giá trị của biến, trả về true nếu cả 2 điều kiện đều đúng (áp dụng với kiểu dữ liệu nguyên thủy).

# Lưu ý khi so sánh 2 objects
- Khi so sánh 2 object, strict equal (===) so sánh địa chỉ ô nhớ của 2 object.

# Cách so sánh 2 objects
- C1: so sánh các key, số key, giá trị của từng key.
- C2: sử dụng JSON.stringify().

# So sánh các loại vòng lặp for
- for với 3 điều kiện cho sẵn sẽ có tốc độ nhanh nhất vì các điều kiện cho vòng lặp đã sẵn sàng.

# Closure là gì?
- Là hàm có thể ghi nhớ nơi nó được tạo ra và có thể truy cập biến ở ngoài phạm vi của nó.
- Closure giúp code ngắn gọn hơn.
- Biến tham chiếu trong closure sẽ không bị xóa khỏi bộ nhớ khi hàm cha thực hiện xong.

# Toán tử bitwise
- Các số bit trong js được biểu diễn bằng 32 bit
- Các loại toán tử:
    + & - AND
    + | - OR
    + ~ - NOT
    + << - Zero fill left shift
    + ^ - XOR
    + >> - Signed right shift
    + >>> - Zero fill right shift

# This
- Từ khóa This trong js đề cập đến đối tượng mà nó thuộc về.
- Trong một phương thức, this tham chiếu tới đối tượng gọi phương thức (trước dấu .).
- Khi đứng ngoài phương thức, this trỏ tới global: 
    + this khi này là Window khi chạy trên web.
    + this khi này là undefined khi chạy trong strict mode hoặc khi ko chạy trên web.
    + this là components khi handle events trên DOM.
    + this trong các function mà gọi tới các phương thức apply, call, bind

# Destructuring
- Gán sử dụng cú pháp Destructuring giúp mở ra các giá trị trong array, hoặc các thuộc tính trong
object thành các giá trị riêng biệt.

# Class 
- Constructor của ES6 có cú pháp rõ ràng và dễ nhìn hơn.
- Body của class được thực thi trong strict mode.
- Kế thừa đơn giản hơn với việc sử dụng extends.

# Default, Rest, Spread
# Default
- Hàm sẽ lấy giá trị đc gán cho tham số nếu vị trí của tham số đó
ko có giá trị truyền vào hoặc được truyền vào undefined.

# Rest 
- Rest: cú pháp của tham số rest cho phép chấp nhận các đối số chưa
được khai báo thành một array.

# Spread
- Spread: bỏ dấu [] và rải các phần tử vào trong

# Promise
- Các để xử lí các hàm bất đồng bộ lần lượt, xử lí vấn đề Callback Hell nan giải trong ES5

# Promise có 3 trạng thái
    + Pending: Đang xử lý => Tình trạng này gây rò rỉ bộ nhớ
    + Fulfilled: Thành công
    + Rejetec: Thất bại

# Cách hoạt động của Promise
    + Promise có thể có nhiều then
    + Trường hợp then ko trả về 1 promise thì các then sẽ chạy đồng thời
    + Còn trả về promise thì sẽ chạy lần lượt
    + Bất kì then nào reject() thì sẽ dừng chạy tại then đó và trả lỗi về catch()

# Prototype của Promise
- then
- catch
- finally

# Method của Promise
- Promise.all()
- Promise.any()
- Promise.allSettled()  (ít sử dụng)
- Promise.race()
- Promise.reject()
- Promise.resolve()

# Async await
- Xuất hiện ở ES7
- Hàm Async được khai báo với từ khóa async, lúc này có thể sử dụng từ khóa await trong hàm đó 
- Từ khóa async await cho các hàm bất đồng bộ, các promise được viết gọn gàng hơn
