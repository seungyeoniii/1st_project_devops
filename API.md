||메소드|엔드포인트|바디 예제|성공시 응답 예제|
|------|------|-------|-------|-------|
|메인 페이지|GET|/items||\{pid: 1234,</br>name: "item1",</br>price: 3000</br>\},</br>\{pid: 1235,</br>name: “item2”,</br>price: 4000</br>\},</br>\{pid: 1236,</br>name: “item3”,</br>price: 5000</br>\}|
|특정 상품 검색|GET|/items?name=||\{</br>_id: savd8s9a7v8</br>name: 상품1</br>price: 30000</br>discription: 설명</br>image: a.png</br>inven_count: 50</br>\}|
|장바구니</br>상품 추가|POST|/carts?user_id=&item_id=&count=|\{</br>user_id=aaaa&item_id=bbbb&count=3</br>\}|\{</br> cart_id: 1234</br>item_id: bbbb</br>count 3</br>\}|
|장바구니</br>상품 삭제|DELETE|/carts/:cid||\{</br>_id: savd8s9a7v8</br>cid: 10</br>item_id: baivjdsivj915</br>user_id: 29unvu1892u</br>count: 3</br>status: false</br>\}|
|주문하기|POST,PUT|/orders?cart_id|\{</br>cart_id=11</br>\}|\{</br>_id:vasdvsdv121 </br>cid:11 </br>item_id:asdfasdf121 </br>user_id:asdfasdfsadf121 </br>count:3 </br>status:true</br>\}|
|장바구니</br>확인|GET|/carts?user_id=||\{</br>_id: savd8s9a7v8</br>cid: 10</br>item_id: baivjdsivj915</br>user_id: 29unvu1892u</br>count: 3</br>status: false</br>\}|
|주문 정보</br>조회|GET|/orders/:oid||\{</br> "_id": savd8s9a7v8,</br>"oid": 123123, </br>"cid": 10, </br>"time": 2022-03-07 23:30:00</br>\}|
|User 생성|POST|/users?email=&name=|\{</br>email=abcd</br>name=e-reum</br>\}|\{</br>email=abcd</br>name=e-reum</br>\}|
|사용자</br>주문 취소|PUT|/orders/:_id||\{</br>"_id": savd8s9a7v8,</br>"oid":1001</br>"cart_id": 10,</br>"time": 9999-01-31 08:00:00</br>\}| 