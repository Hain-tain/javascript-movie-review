# javascript-movie-review

## FE 레벨1 영화관 미션

## 기능 목록

- [x] Domain

  - [x] `인기순`으로 영화 목록 불러온다.
    - 한 번에 20개씩 불러온다.
    - 별도로 받은 데이터를 정렬하지 않는다.
    - [x] 통신에 실패한 경우 오류를 발생시킨다.
  - [x] 인자로 받은 쿼리로 영화 목록을 불러온다.
    - 한 번에 20개씩 불러온다.
    - [x] 통신에 실패한 경우 오류를 발생시킨다.

- [x] UI

  - [x] 영화 목록의 1페이지(20개)를 출력한다.

    - [x] 사용자가 브라우저 화면의 끝에 도달하면 그 다음 목록을 불러 온다. (무한 스크롤 방식)

  - [x] 보고 싶은 영화를 검색한다.

    - [x] 엔터키를 눌러 검색한다.
    - [x] 검색 버튼을 클릭하여 검색한다.
    - [x] 사용자가 브라우저 화면의 끝에 도달하면 그 다음 목록을 불러 온다. (무한 스크롤 방식)

  - [x] 영화 포스터나 제목을 클릭하면 영화의 상세 정보(예고편, 줄거리 등)를 보여준다.

    - [x] 닫기 버튼을 누르면 모달 창을 닫는다.
    - [x]키보드의 ESC 키를 누르면 모달 창을 닫는다.

  - [x] 사용자는 영화에 대해 별점을 줄 수 있다.

    - 별점은 5개로 구성되어 있으며 한 개당 2점이며 1점 단위는 고려하지 않는다.

      - 별 1개(2점): 최악이예요
      - 별 2개 (4점): 별로예요
      - 별 3개 (6점): 보통이에요
      - 별 4개 (8점): 재미있어요
      - 별 5개 (10점): 명작이에요

    - [x] 새로고침하더라도 사용자가 남긴 별점은 유지된다.

  - [x] 영화 목록과 영화 상세 정보가 뜨는 모달창에 대한 반응형 레이아웃을 구성한다.
  - [x] 데이터를 로딩하는 동안 영화 목록 아이템에 대한 Skeleton UI를 출력한다.
  - [x] 오류가 발생한 경우, 오류 메세지를 띄워준다.
