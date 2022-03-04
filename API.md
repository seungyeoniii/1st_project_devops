||메소드|엔드포인트|바디 예제|성공시 응답 예제|
|------|------|-------|-------|-------|
|메인 페이지|GET|/items||\{pid: 1234,</br>name: "item1",</br>price: 3000</br>\},</br>\{pid: 1235,</br>name: “item2”,</br>price: 4000</br>\},</br>\{pid: 1236,</br>name: “item3”,</br>price: 5000</br>\}|
|특정 상품 검색|GET|/items/?name=name||\{</br>id: 1234,</br>name: “item1”,</br>price: 3000</br>\}|
|장바구니</br>상품 추가|POST|/carts/:cid|\{</br>id: 1234,</br>uid: 12</br>\}|\{</br>id: 1234,</br>name: “item1”,</br>price: 3000</br>\}|
|장바구니</br>상품 삭제|DELETE|/carts/:cid||\{</br>item_id: 1234,</br>ok: 1</br>\}|
|주문하기|POST,PUT|/orders/:cart_id|\{</br>cid: 11, </br>status: true</br>\}|\{</br>oid: 13</br>\}|
|장바구니</br>확인|GET|/carts/:cid||\{</br>cid: 10</br>\}|
|주문 정보</br>조회|GET|/orders/:oid||\{</br>oid: 12</br>\}|
|User 생성|POST|/users|\{</br>user_id :</br> “abcd”,</br>user_password : “1234”,</br>user_name : ”aabb”</br>\}|\{</br>cid: 10</br>\}|
|사용자</br>주문 취소|PUT|/orders/:user_id|\{</br>id: 1234,</br>count: 2,</br>uid: 123,</br>time:”X”</br>\}|\{</br>name: “ab”,</br>user_id: “aaaa”,</br>time: “X”</br>\}|