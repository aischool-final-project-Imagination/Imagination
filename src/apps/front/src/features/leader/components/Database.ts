// Database.ts1
export interface LeaderboardEntry {
  // userProfileImg: post.owner.user_profile_img,
  // userName: post.owner.id,
  // objectId: post.owner._id,
  profile_id: string;
  _id: string;
  // _id: null;
  img: string;
  title: string;
  content: string;
  // hashtags: string;
  // likeCount: post.likes,
  hashtag: string;
  likeCount: number;
  filledLikeCount: number;
  // filledLikeCount: number;
  prompt: string;
  Nprompt: string;
  dt: string;
}
const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const Leaderboard: LeaderboardEntry[] = [
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701247296263',
    _id: 'choijinwoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-c46ed8cc-cac8-4503-84b8-f599e7a7a709.webp?alt=media',
    title: '겨울밤의 은하수',
    content:
      '차가운 겨울밤에 반짝이는 은하수를 통해 우주의 신비를 탐구합니다. 겨울밤의 은하수는 어떤 감정을 불러일으키나요? 경이? 무한함? 아니면 조용한 감탄?',
    hashtag: '#겨울밤, #은하수, #우주의신비',
    likeCount: 210,
    filledLikeCount: 211,
    prompt: 'winter, galaxy, stars, awe, cosmos',
    Nprompt: 'night sky, cold, solitude',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtanM2cGM%3D-af3bb57b-e0cd-40b0-89af-aeec621108dc.webp?alt=media',
    title: '봄날의 꽃길',
    content:
      '따스한 봄날, 꽃으로 가득한 길을 거닐며 자연의 아름다움을 느낍니다. 봄날의 꽃길은 어떤 기분을 줄까요? 활기? 희망? 아니면 재생?',
    hashtag: '#따스한, #봄날, #꽃길',
    likeCount: 220,
    filledLikeCount: 221,
    prompt: 'spring, flowers, bloom, rejuvenation, hope',
    Nprompt: 'petals, fragrance, renewal',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'leechi',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-dbc0e7f0-af9f-4319-bb5e-781c86d00ba0.webp?alt=media',
    title: '도심의 비 오는 거리',
    content:
      '도시의 번화가에서 내리는 비를 통해 도시의 다른 면을 탐구합니다. 비 오는 거리의 모습은 어떤 감정을 자아낼까요? 반짝임? 몽환? 아니면 잔잔함?',
    hashtag: '#도시, #번화가, #비오는거리',
    likeCount: 240,
    filledLikeCount: 241,
    prompt: 'rain, city, lights, reflection, tranquility',
    Nprompt: 'urban, wet streets, solitude',
    dt: '2023-11-19',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-f0239be6-f246-4255-bfa5-ae0152fbe327.webp?alt=media',
    title: '해변의 일몰',
    content:
      '해변에서 바라보는 일몰의 아름다움을 통해 평화와 성찰의 순간을 포착합니다. 해변의 일몰은 어떤 느낌을 줄까요? 평온? 아름다움? 아니면 새로운 시작? 🤍',
    hashtag: '#해변, #일몰, #평화, #성찰, #평온, #아름다움, #새로운시작',
    likeCount: 250,
    filledLikeCount: 251,
    prompt: 'sunset, beach, sea, calm, beauty',
    Nprompt: 'ocean, horizon, solitude',
    dt: '2023-11-19',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701247218523',
    _id: 'chimchack',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-2296417b-90c1-473f-bfcb-30decd8bc182.webp?alt=media',
    title: '가을 숲의 산책',
    content:
      '가을에 산책하는 숲의 모습을 통해 자연의 변화와 아름다움을 탐구합니다. 가을 숲에서의 산책은 어떤 감정을 자아내는가요? 성찰? 평온함? 아니면 변화?',
    hashtag: '#가을, #산책, #자연의변화, #, #아름다움, #가을숲',
    likeCount: 200,
    filledLikeCount: 201,
    prompt: 'autumn, forest, walk, peaceful, change',
    Nprompt: 'leaves, colors, solitude',
    dt: '2023-11-19',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'leechiyeon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-0758815c-1e15-4a2d-9988-182cdd994136.webp?alt=media',
    title: '산 속의 아침',
    content:
      '평화로운 산속 아침의 모습을 담은 이 작품은 자연의 아름다움과 고요함을 그려냅니다. 새벽의 산에서 우리는 어떤 감정을 느낄까요? 명상? 신비?',
    hashtag: '#평화로운, #산속아침',
    likeCount: 190,
    filledLikeCount: 191,
    prompt: 'mountains, dawn, nature, calm, beauty',
    Nprompt: 'forest, mist, tranquility',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNXJ4OXI%3D-cc795e80-4acf-4cfe-afa9-03a8788b75cc.webp?alt=media',
    title: '도심 속 조용한 카페',
    content:
      '번잡한 도시 속의 한적한 카페에서의 한 때를 포착한 이 작품은 현대 생활의 여유와 사색을 담아냅니다. 카페에서 우리는 어떤 감정을 느낄까요? 여유? 반성?',
    hashtag: '#한적한카페, #현대생활',
    likeCount: 180,
    filledLikeCount: 181,
    prompt: 'cafe, city life, relaxation, contemplation',
    Nprompt: 'urban, solitude, coffee',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-b74d885d-3ed9-4fc6-a9c6-793e3f062f6d.webp?alt=media',
    title: '밤하늘의 별빛',
    content:
      '밤하늘을 수놓는 별들의 이야기와 그들의 신비로운 광채를 탐구합니다. 별빛이 주는 감정은 무엇일까요? 경이? 평온함? 아니면 무한한 꿈?',
    hashtag: '#밤하늘, #별들, #광채, #별빛',
    likeCount: 170,
    filledLikeCount: 171,
    prompt: 'stars, night, galaxy, dreams, peace',
    Nprompt: 'universe, solitude, space',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-a9d940e1-5743-4c65-8dc5-fa9ea9127829.webp?alt=media',
    title: '강변의 황혼',
    content:
      '강가에서 바라보는 황혼의 모습을 통해 평화와 사색의 순간을 포착합니다. 강변의 황혼은 어떤 느낌을 줄까요? 성찰? 안식? 아니면 그리움?',
    hashtag: '#강가',
    likeCount: 160,
    filledLikeCount: 161,
    prompt: 'river, dusk, serenity, reflection',
    Nprompt: 'water, twilight, solitude',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnFwenM%3D-637d1acf-8c85-4910-9f51-405fa6651b13.webp?alt=media',
    title: '도시의 야경',
    content:
      '밤하늘 아래 빛나는 도시의 야경을 통해 현대 생활의 에너지를 탐구합니다. 번화가의 밤은 어떤 감정을 자아내나요? 활기? 도전? 아니면 꿈?',
    hashtag: '#밤하늘, #도시, #야경, #에너지, #번화가',
    likeCount: 150,
    filledLikeCount: 151,
    prompt: 'cityscape, night, lights, energy',
    Nprompt: 'urban glow, nightlife, excitement',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtbGtxbjc%3D-3c28478b-63ed-4105-bcca-d0d82824fbce.webp?alt=media',
    title: '얼어붙은 호수',
    content:
      '겨울철 얼어붙은 호수의 고요함과 순수함을 탐구합니다. 얼음으로 뒤덮인 호수는 어떤 느낌을 줄까요? 고요함? 순수함? 아니면 멈춤?',
    hashtag: '#겨울철, #고요함, #순수함',
    likeCount: 140,
    filledLikeCount: 141,
    prompt: 'frozen lake, winter, stillness, purity',
    Nprompt: 'ice, cold, tranquility',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-88ee2830-c6f0-449e-9139-ff70667c73c3.webp?alt=media',
    title: '사막의 별밤',
    content:
      '사막의 밤하늘 아래 빛나는 별들을 통해 자연의 광활함과 아름다움을 탐구합니다. 사막의 밤은 어떤 감정을 불러일으킬까요? 무한함? 경이? 아니면 고독?',
    hashtag: '#밤하늘, #광활함, #아름다움',
    likeCount: 130,
    filledLikeCount: 131,
    prompt: 'desert, stars, vastness, awe',
    Nprompt: 'night sky, solitude, infinity',
    // dt: '2023-11-29',
    dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-f9e8e98e-6ea4-4b6f-a338-33f2c80de6b4.webp?alt=media',
    title: '고즈넉한 마을의 아침',
    content:
      '조용한 마을에서 맞이하는 평화로운 아침의 모습을 담아냅니다. 이른 아침의 마을은 어떤 감정을 불러일으키나요? 평화? 새로운 시작? 아니면 여유?',
    hashtag: '#조용한마을, #아침, #마을',
    likeCount: 120,
    filledLikeCount: 121,
    prompt: 'village, morning, peace, new beginnings',
    Nprompt: 'quiet, dawn, serenity',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-825da662-701b-4dcf-987e-739843539f66.webp?alt=media',
    title: '공원의 가을',
    content:
      '가을이 찾아온 공원의 다채로운 색채와 생명력을 탐구합니다. 가을 공원은 어떤 느낌을 줄까요? 변화? 생명? 아니면 색채? 😁',
    hashtag: '#가을, #공원, #생명력',
    likeCount: 110,
    filledLikeCount: 111,
    prompt: 'park, autumn, colors, life',
    Nprompt: 'leaves, changing seasons, vibrancy',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-6d4ca42c-b8b5-4eaa-ad68-2ac527225b1d.webp?alt=media',
    title: '바람이 만든 언덕',
    content:
      '시간과 바람에 의해 조각된 언덕의 모습을 통해 자연의 창조적 힘을 탐구합니다. 언덕의 곡선은 어떤 느낌을 줄까요? 유연함? 지속성? 아니면 조화?',
    hashtag: '#시간, #바람, #조각언덕',
    likeCount: 100,
    filledLikeCount: 111,
    prompt: 'hills, wind, nature, creation, harmony',
    Nprompt: 'landscapes, erosion, beauty',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'jongyong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-f3b403a2-990a-45f0-82c6-c3b8dc059839.webp?alt=media',
    title: '구시가지의 밤',
    content:
      '역사가 깃든 구시가지의 밤 풍경을 통해 과거와 현재의 만남을 탐구합니다. 구시가지의 밤은 어떤 감정을 자아내나요? 추억? 멜랑콜리? 아니면 숨겨진 이야기?',
    hashtag: '#역사, #구시가지, #풍경',
    likeCount: 90,
    filledLikeCount: 91,
    prompt: 'old town, night, history, nostalgia',
    Nprompt: 'streets, past, melancholy',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image39cfa813-fdc0-4587-8907-ae4d8c8bd1ef.webp',
    title: '볼리베어?',
    content:
      '진짜 엄청 귀여운 곰이나왔따 하얀 털을 까먹었나보다 ㅎㅎ 눈이 너무 귀엽다',
    hashtag: '#곰, #귀여움, #진짜귀여움, #졸귀탱',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'hyper-detailed energy collors, fierce-looking, ferocious bear in center composition, a head-on gaze, close up, , detailed fur texture, strong glowing geometric, dark-clouded background, foggy, stormy, cinematic, highly detailed, intricate detail. 8k, surrealism,trending on artstation, best composition, front view, by Yuri Shwedoff style, highly detailed face, digital art, impressionism, deep gaze, best composition, monotone, golden eyes that shine intensely, large contrast of light and shade',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image3701ca17-4243-41da-99bb-a3b4dffa50d4.webp',
    title: '수제버거 폼 미쳤다',
    content:
      '아 햄버거 먹고싶다 치즈 엄청많이 넣고, 패티 엄청크고, 신선한 양상추에 소스 엄청 때려박은 햄버거 먹고싶다~ 햄버거 > 피자 >>>>> |넘을 수 없는 벽|>>>>>치킨',
    hashtag: '#치킨보단, #햄버거',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Brazilian burger with two meats, bacon and strips, cheddar cheese, lettuce and tomato in open plan',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image7d551605-b53e-4307-bc32-d1afab05d877.webp',
    title: '채식주의자의 접시',
    content:
      '채식주의자는 먹고나서 어떨까 라고 생각나서 해보았는데,,, 나는 진짜 채식은 안해야지... 진짜루..',
    hashtag: '#채식, #우웩, #고기가최고',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Kitchen mockup image, an empty plate in the center, some herbs and dried flowers on the edge of the wooden table, slightly, intricately detailed, close-up, studio lighting, sharp focus, ultra high definition, shot on Canon DSLR, f/2.8',
    Nprompt:
      'nsfw, low res, text, error, extra digit, fewer digits, cropped, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, frame, split image, username, blurry, grainy, deformed, low saturation',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-882b9d30-96fb-4092-ba3f-2eefd24f7382.webp?alt=media',
    title: '폭포 아래의 비밀',
    content:
      '폭포의 장엄한 모습과 그 아래 숨겨진 비밀을 탐구합니다. 폭포 아래의 세계는 어떤 느낌을 줄까요? 웅장함? 신비? 아니면 숨겨진 삶?',
    hashtag: '#폭포, #비밀탐구',
    likeCount: 50,
    filledLikeCount: 51,
    prompt: 'waterfall, secret, majesty, mystery',
    Nprompt: 'nature, hidden, life',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageebd7001d-6629-4e84-af2a-5e11964514a9.webp',
    title: '고양이라는데 이게뭐야',
    content: '프롬프트를 잘못 썻나보다. 나중엔 네거티브 프롬프트도 잘 써봐야지',
    hashtag: '#망한..., #고양이..., #난고양이가 보고싶어',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'realistic monochromatic abstract paintings arts of Multicolor cats , unseen, creative, beyond the limits, colorful, Brushstroke driven style of Impressionism with realistic subject matter',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image3126a9ed-41de-4f63-aa48-5824b830efd5.webp',
    title: '게임캐릭터가 생각나서...',
    content:
      '게임 캐릭터가 생각나서 해보았는데 과연...? 멋지긴 한데 너무 가까이서 그려진거 같아!!!',
    hashtag: '#너무 가깝다, #다음엔 더멀리, #멋지다 그래도',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'hyper-detailed d&d drow, short white haired male, strong bright red eyes, wearing a casual leather cloth, front view, highly detailed face, digital art, impressionism, deep gaze, best composition, dark-clouded background',
    Nprompt:
      'poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, body out of frame, watermark, distorted face, bad anatomy extra anatomy, extra face, extra arms, extra fingers, extra hands, extra legs, extra feet, extra toe, mutated hands',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701247296263',
    _id: 'choijinwoo',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageb5bd766a-b4b5-46dd-8edc-e6b2b1af8b45.webp',
    title: '멍뭉이',
    content: '멍멍',
    hashtag: '#화남, #멍뭉이',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'hyper-detailed energy collors, fierce-looking dog in center composition, a head-on gaze, close up, , detailed fur texture, strong glowing geometric, dark-clouded background, foggy, stormy, cinematic, highly detailed, intricate detail. 8k, surrealism,trending on artstation, best composition, front view, by Yuri Shwedoff style, highly detailed face, digital art, impressionism, deep gaze, best composition, monotone, golden eyes that shine intensely, large contrast of light and shade',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image3c304bb9-2118-492d-96b4-393a49c2ede1.webp',
    title: '귀여운 친구',
    content: '햄스터일까? 라따뚜이일까? 밀짚모자를 쓰고싶은 그녀석.',
    hashtag: '#햄스터, #쥐, #밀짚모자',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'portrait photography, Anthropomorphic hamster, cartoon character image of dog, game character, illustration, pixar style, disney style, concept art, Digital art, Cawaii, frontal, smiling, cute, studio light, Highly detailed, detailed eyes, Trending on artstation, trending on cgsociety',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, nsfw, ugly, low res, text, realistic, watermark, bad proportions, out of frame, Extra legs, Extra arms, cropped, worst quality, low quality, fullbody, watermark, blurry, face distortion, distorted face, poorly drawn face, human, poorly drawn finger, hole',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image5e3641e2-ed04-44c1-b161-629a8baad3e3.webp',
    title: '타이거 마스크 2',
    content:
      '🐺붉은 늑대인간의 사냥본능을 일으키지마라.. 세상이 이 늑대휴먼으로 인해 엄청난 손해를 볼것이다🥲',
    hashtag: '#kimyouwon, #늑대인간, #타이거마스크',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'marker masterpiece, FULL BODY WEREWOLF IN RED HOOD,dark night wood,dark horror ambience,splash style of colorful paint, contour, hyperdetailed intricately detailed, fantasy concept art, 16k rim lighting, Perfect lighting, Sharp focus,ultra hd, realistic, vivid colors, highly detailed, UHD drawing, pen and ink, perfect composition, beautiful detailed intricate insanely detailed octane render trending on artstation, 8k artistic photography, photorealistic concept art, soft natural volumetric cinematic perfect light',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, nsfw, low res, text, error, ugly, extra digit, fewer digits, old fashioned, worst quality, low quality, normal quality, signature, watermark, username, blurry, hands, face distortion, distorted face, poorly drawn face, framework, poorly drawn body',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701247218523',
    _id: 'chimchack',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagef8b36bb8-d8d0-43a0-ac66-a5319a8f9ef2.webp',
    title: '모든 영웅을 하나로!',
    content:
      '슈퍼맨, 배트맨, 아이언맨, 침착맨 레츠고~! 그래도 침착맨이 제일 좋다...',
    hashtag: '#슈퍼, #히어로',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'marvels the character superhero photographed by lee jeffries, expressive eyes, dark background, proportionate body, photo realistic cloths, extreme detail, high contrast, hd, HDR, ray tracing, subsurface scattering, black and white, smoke effects, highly detailed, ultra detail, volumetric lighting',
    Nprompt:
      'asymmetrical, mouth, ears, holes, out of frame, bad art, blurry, bad anatomy, bad proportions, gross proportions, watermark, worst quality, low quality, extra fingers, poorly drawn hands, extra limbs, disfigured, fused fingers, too many fingers',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageff303048-1976-4aff-8e2f-eab8e4c38a2e.webp',
    title: '엑스맨의 후예',
    content: '그는 플래시인가? 배트맨인가? 화면이 검은색이라 잘 안보임..',
    hashtag: '#배트맨, #플래시, #DC히어로',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'marvels the character superhero photographed by lee jeffries, expressive eyes, dark background, proportionate body, photo realistic cloths, extreme detail, high contrast, hd, HDR, ray tracing, subsurface scattering, black and white, smoke effects, highly detailed, ultra detail, volumetric lighting',
    Nprompt:
      'asymmetrical, mouth, ears, holes, out of frame, bad art, blurry, bad anatomy, bad proportions, gross proportions, watermark, worst quality, low quality, extra fingers, poorly drawn hands, extra limbs, disfigured, fused fingers, too many fingers, low res, text, error, ugly, extra digit, fewer digits, old fashioned, worst quality, low quality, normal quality, signature, watermark, username, blurry, hands, face distortion, distorted face, poorly drawn face, framework, poorly drawn body',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701247218523',
    _id: 'chimchack',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image220019b9-a075-4c73-8ba4-374ba0279df2.webp',
    title: '낭만.. 미쳤다',
    content: '그림쟁이들.. 잘가라... 이건 못이긴다.. 이게 이과다!!!',
    hashtag: '#대세는, #개발자, #낭만, #미쳤다잉',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'a female Cupid and a human man making love, aesthetic, pastel hair, illustration, portrait photography, Full body shot, crisp quality, intricate details, realistic skin texture, Soft pastel tones, Carne Griffiths',
    Nprompt:
      '3d, plastic, low res, text, fullbody, extra digit, fewer digits, cropped face, worst quality, low quality, normal quality, watermark, blurry, hands, face distortion, distorted face, poorly drawn face, framework, tacky, hole, ugly, multiple eyes, realistic',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image5f964932-1f87-4819-a596-3ec77aef4502.webp',
    title: '스파이더맨 고퀄',
    content: '빌딩 사이를 헤집고 다니는 스파이더맨',
    hashtag: '#스파이더맨, #고퀄리티',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Spider-Man in action, swinging through the skyscrapers of New York City, dynamic pose, intense expression, high-quality digital art, realistic texture, using Marvels official character model',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, low res, text, error, ugly, extra digit, fewer digits, old fashioned, worst quality, low quality, normal quality, signature, watermark, username, blurry, hands, face distortion, distorted face, poorly drawn face, framework, poorly drawn body',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image70e97a0c-d6c3-4e2b-bd69-02f57dd25f37.webp',
    title: '신룡',
    content: '언뜻 드래곤볼의 신룡이 아닐까',
    hashtag: '#신룡, #드래곤볼',
    likeCount: 2,
    filledLikeCount: 3,
    prompt:
      'a traditional Chinese dragon gliding through a cosmic galaxy, depicted through captivating digital illustration. The artwork showcases the dragons powerful and graceful movement against a backdrop of cosmic stars, its long tail creating intricate patterns within the cosmic expanse.Intense and vivid hues amplify the majestic ambiance, highlighting the dragons celestial journey. The dragons expression reflects a blend of power and tranquility.Dynamic lighting adds depth and dimension to the dragons presence amidst the stars. Pro vector, perfect MINIMALISTIC art HIGH QUALITY details, Ultra high details, full design, victoria, vibrant vector, deep lines, heavy strokes',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, out of frame, low resolution, blurry, worst quality, fuzzy, lowres, text, low quality, normal quality, signature, watermark, grainy',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagebb301301-9249-453c-9cda-6d7c94330e44.webp',
    title: '이상한 나라의 엘리스 토끼',
    content:
      '역대급 퀄리티이긴 한데 팔이 아쉽다 이건진짜 아쉽다 그래도 귀여운토끼의 의인화 멋지다!!!',
    hashtag: '#토끼, #토끼인간, #의인화, #토끼남자, #정장토끼',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'portrait photography cute White Rabbit, in the theme of alice in wonderland, adorable cute White Rabbit, the rabbit wearing Tuxedo jacket and holding pocket watch, fantasy concept art, trending on cgsociety, trending artstation, by greg rutkowski, cartoon, MBE illustrations, highly detailed digital painting, in style grunge beauty, intricate details, detailed, forest background jedi star wars light saber',
    Nprompt:
      'nsfw, ugly, low res, text, logo, watermark, bad proportions, out of frame head, Extra legs, Extra arms, cropped, worst quality, low quality, normal quality, watermark, blurry, face distortion, distorted face, poorly drawn face, framework, human, hand',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagef8047c57-1f91-48cb-831c-bb42c53c16a4.webp',
    title: '민박집 막내 아들의 작품',
    content: '숲 속 오두막 조명이 켜져있지',
    hashtag:
      '#오두막, #재벌집막내아들, #송중기, #가되고싶은, #민박집막내아들, #songminjae',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Isometric 3D design of a cozy foresters house nestled in a lush forest, detailed woodwork and stonework, comfortable and inviting interior design, full shot, Autodesk Maya, 3Ds Max, Blender, C4D',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, logo, cropped, out of frame, illustration, cartoon, Non-Photorealistic Rendering, toon',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },

  // dt: getTodayDate(),
  // {
  //   profile_id: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
  //   _id: 'jongyong',
  //   img: '',
  //   title: '',
  //   content: '',
  //   hashtag: '',
  //   likeCount: 100,
  //   prompt: '',
  //   Nprompt: '',
  //   dt: '2023-11-19',
  //   // dt: getTodayDate(),
  // },
];
