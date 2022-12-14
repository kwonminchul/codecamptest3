import * as O from "./BoardDetail.styles";
// import { v4 as uuidv4 } from "uuid";
import DOMPurify from "dompurify";

export default function BoardDetailUI(props: any) {
  console.log(props.data?.fetchUseditem);
  return (
    <O.Wrapper>
      <O.TopWrapper>
        <O.ImageWrapper>
          <O.Image
            src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
          />
        </O.ImageWrapper>
        <O.ItemWrapper>
          <O.NameWrapper>
            <O.Name>{props.data?.fetchUseditem?.name}</O.Name>
          </O.NameWrapper>
          <O.RemarksWrapper>
            <O.Remarks>{props.data?.fetchUseditem?.remarks}</O.Remarks>
            <O.UpdateIcon
              src={"/write.png"}
              onClick={props.onClickMoveToUseditemEdit}
            />
            <O.DeleteIcon src={"/delete.png"} onClick={props.onClickDelete} />
          </O.RemarksWrapper>
          <O.PriceWrapper>
            <O.PriceTop>
              <O.Sell>ํ๋งค๊ฐ</O.Sell>
              <O.Price>{props.data?.fetchUseditem?.price}</O.Price>
              <O.Won>์</O.Won>
            </O.PriceTop>
            <O.LikeWrapper onClick={props.onClickLike}>
              <O.LikeBoxM>MY</O.LikeBoxM>
              <O.LikeBoxI onClick={props.onClickLike} src="/like.png" />
              <O.LikeBoxP>
                {props.data?.fetchUseditem?.pickedCount}Product
              </O.LikeBoxP>
            </O.LikeWrapper>
          </O.PriceWrapper>
          <O.Contents>
            {typeof window !== "undefined" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: props.data?.fetchUseditem.contents,
                }}
              ></div>
            ) : (
              <div style={{ color: "gary" }} />
            )}
          </O.Contents>
          <O.TagsWrapper>
            {(props.data?.fetchUseditem?.tags || []).map((e) => (
              <O.Tags>{e}</O.Tags>
            ))}
          </O.TagsWrapper>
          <O.ButtonsWrapper>
            {/* <O.LikeBox onClick={props.onClickLike}>
                  โก์ฐ{props.data?.fetchUseditem?.pickedCount}
                </O.LikeBox> */}
            <O.BuyBox type={"button"} onClick={props.onClickBuy}>
              BUY NOW
            </O.BuyBox>
            <O.BasketBox>SHOPPING BAG</O.BasketBox>
          </O.ButtonsWrapper>
        </O.ItemWrapper>
      </O.TopWrapper>
      <O.BottomWrapper>
        <O.Label>DETAIL</O.Label>
        <O.ContentsL></O.ContentsL>
        <O.MidImageWrapper>
          {props.data?.fetchUseditem.images
            ?.filter((el: string) => el)
            .map((el: string) => (
              <O.MidImage
                key={el}
                src={`https://storage.googleapis.com/${el}`}
              />
            ))}
        </O.MidImageWrapper>
        <O.MapWrapper>
          <O.MapInfo>๋ฐฐ์ก/๊ตํ/๋ฐํ/AS ๊ด๋?จ ์?์์ฌํญ</O.MapInfo>
          <O.MapSubInfo>
            ์ํ์์ธ์ค๋ช์ ๋ฐฐ์ก/๊ตํ/๋ฐํ/์ทจ์ ๊ด๋?จ ์๋ด๊ฐ ๊ธฐ์ฌ๋ ๊ฒฝ์ฐ ๋ค์
            ์๋ด์ฌํญ๋ณด๋ค ์ฐ์? ์?์ฉ๋ฉ๋๋ค.
          </O.MapSubInfo>
          <O.Map id="map"></O.Map>
          <O.MapSubInfo>
            โข์ํ๋ณ๋ก ์ํ ํน์ฑ ๋ฐ ๋ฐฐ์ก์ง์ ๋ฐ๋ผ ๋ฐฐ์ก์?ํ ๋ฐ ์์๊ธฐ๊ฐ์ด
            ๋ฌ๋ผ์ง๋๋ค.
            <br />
            โข์ํ์ ๋ฐฐ์ก๋น๋ ๊ณต๊ธ์์ฒด์ ์?์ฑ์ ๋ฐ๋ผ ๋ค๋ฅด์ค๋ฉฐ ๊ณตํด์ผ ๋ฐ ํด์ผ์
            ๋ฐฐ์ก์ด ๋ถ๊ฐํฉ๋๋ค.
            <br />
            โข์ํํ์ ์ด์ธ ์ฌ์ด์ฆ, ์์๊ตํ ๋ฑ ๋จ์ ๋ณ์ฌ์ ์ํ ๊ตํ/๋ฐํ ํ๋ฐฐ๋น
            ๊ณ?๊ฐ๋ถ๋ด์ผ๋ก ์๋ณตํ๋ฐฐ๋น๊ฐ ๋ฐ์ํฉ๋๋ค. (์?์์๊ฑฐ๋ ๋ฑ์์์
            ์๋น์๋ณดํธ์ ๊ดํ ๋ฒ๋ฅ? ์?18์กฐ(์ฒญ์ฝ ์ฒ?ํ ๋ฑ) 9ํญ์ ์๊ฑฐ ์๋น์์
            ์ฌ์?์ ์ํ ์ฒญ์ฝ ์ฒ?ํ ์ ํ๋ฐฐ๋น๋ ์๋น์ ๋ถ๋ด์๋๋ค.)
            <br />
            โข์ฃผ๋ฌธ์๋ฃ ํ ์ฌ๊ณ? ๋ถ์กฑ ๋ฑ์ผ๋ก ์ธํด ์ฃผ๋ฌธ ์ทจ์ ์ฒ๋ฆฌ๊ฐ ๋? ์๋ ์๋ ์?
            ์ํด ๋ถํ๋๋ฆฝ๋๋ค.
            <br />
            โข๋ฐํ/๊ตํ์ ๋ฏธ์ฌ์ฉ ์?ํ์ ํํด ๋ฐฐ์ก์๋ฃ ํ 7์ผ ์ด๋ด์ ์?์ํ์ฌ
            ์ฃผ์ญ์์ค.
            <br />
            โข์?ํ์ ์ฌ์ฉ ๋๋ ํผ์ํ ๊ฒฝ์ฐ, ์ฌ์ํ ๋๋ฝ, ์ํ TAG ๋ณด์ฆ์, ์ํ
            ๋ถ์์ฌ๊ฐ ์?๊ฑฐ ํน์ ๋ถ์ค๋ ๊ฒฝ์ฐ, ๋ฐ๋ดํฌ์ฅ์ ๊ฐ๋ดํ๊ฑฐ๋ ๋ด๋ถ ํฌ์ฅ์ฌ๋ฅผ
            ํผ์ ๋๋ ๋ถ์คํ ๊ฒฝ์ฐ(๋จ, ์?ํํ์ธ์ ์ํ ๊ฐ๋ด ์?์ธ) ๋ฐํ/๊ตํ์ด
            ๋ถ๊ฐํฉ๋๋ค.
            <br />
            โขA/S ๊ธฐ์ค์ด๋ ๊ฐ๋ฅ์ฌ๋ถ๋ ๋ธ๋๋์ ์ํ์ ๋ฐ๋ผ ๋ค๋ฅด๋ฏ๋ก ๊ด๋?จ ๋ฌธ์๋
            ์์ด๋ธ๋ฆฌ ๊ณ?๊ฐ์ผํฐ๋ฅผ ํตํด ๋ถํ๋๋ฆฝ๋๋ค.
            <br />
            โข์ํ๋ถ๋์ ์ํ ๋ฐํ,๊ตํ, A/S, ํ๋ถ, ํ์ง๋ณด์ฆ ๋ฐ ํผํด๋ณด์ ๋ฑ์
            ๊ดํ ์ฌํญ์ ์๋น์๋ถ์ํด๊ฒฐ๊ธฐ์ค(๊ณต์?๊ฑฐ๋์์ํ ๊ณ?์)์ ๋ฐ๋ผ ๋ฐ์ผ์ค ์
            ์์ต๋๋ค.
          </O.MapSubInfo>
        </O.MapWrapper>
        <O.Label>Q & A</O.Label>
        <O.ContentsL></O.ContentsL>
      </O.BottomWrapper>
    </O.Wrapper>
  );
}
