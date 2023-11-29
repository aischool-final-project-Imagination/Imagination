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
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagea420c90a-8d11-44a0-b5b9-51d3b1f25737.webp',
    title: '타이거 마스크',
    content:
      '🐺붉은 늑대의 사냥본능을 일으키지마라.. 세상이 이 늑대로 인해 엄청난 손해를 볼것이다🥲',
    hashtag: '#늑대, #빨간, #세상, #무서운, #이야기',
    likeCount: 5,
    filledLikeCount: 6,
    // filledLikeCount: 211,
    prompt:
      'marker masterpiece, FULL BODY WEREWOLF IN RED HOOD,dark night wood,dark horror ambience,splash style of colorful paint, contour, hyperdetailed intricately detailed, fantasy concept art, 16k rim lighting, Perfect lighting, Sharp focus,ultra hd, realistic, vivid colors, highly detailed, UHD drawing, pen and ink, perfect composition, beautiful detailed intricate insanely detailed octane render trending on artstation, 8k artistic photography, photorealistic concept art, soft natural volumetric cinematic perfect light',
    Nprompt:
      'low quality, worst quality, mutated, mutation, distorted, deformed, wrong shape, text, text, signature, pencil, title, heading, watermark, ugly, duplicate, morbid, mutilated, out of frame, extra fingers, mutated hands, poorly drawn hands, poorly drawn face, mutation, deformed, blurry, bad anatomy, bad proportions, extra limbs, cloned face, disfigured, out of frame, ugly, extra limbs, gross proportions, malformed limbs, missing arms, missing legs, extra arms, extra legs, mutated hands, fused fingers, too many fingers, long neck, blurry, bad anatomy, extra limbs, poorly drawn face, poorly drawn hands, missing fingers',
    dt: '2023-11-29',
    // dt: getTodayDate(),
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageb8dc0d47-133e-4cd1-bcab-0809f4756afd.webp',
    title: '고흐의 맑은 해변',
    content: '고흐의 해변에서 춤을 추는 여성을 쳐다보는 남자',
    hashtag: '#해변, #연인, #고흐',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'wonderful beach, Abbott Fuller Graves, with sunshine, couple, play ballyball',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image952f7585-fd9c-419c-acdc-3fde5060adaa.webp',
    title: '클래식 카',
    content: '거리에 있는 클래식 카',
    hashtag: '#클래식카, #중후함, #아름다운 노을',
    likeCount: 2,
    filledLikeCount: 3,
    prompt:
      'A black 1941 Horch in a charming cobblestone alley at dusk, illuminated by warm street lamps, surrounded by ivy-covered buildings. Light drizzle falls, reflecting on the wet stones, as the sky "display"s soft pastel hues',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagee476de9d-20cb-4d11-946e-6b54db505211.webp',
    title: '환상의 동물 유니콘',
    content:
      '꿈의 동물 유니콘이 구름 속을 가르고 있다. 자유롭고 평화로운 것을 상징하는 것이다.🤍',
    hashtag: '#환상, #자유, #날개, #유니콘, #구름, #행복, #평화',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'majestic unicorn pegasus, by donato giancola, artgerm, cinematic amazing stunning, intricate meticulous insanely hyperdetailed, epic brilliant stunning dramatic atmospheric maximalist, masterpiece, matte painting movie poster, trending artstation',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageacc49e8b-3a53-425d-ba12-dd3b48b0fe1b.webp',
    title: '100년후 미래.....',
    content:
      '언젠가는 로봇에게 지배당할것이다.... 미리 ai 에게 잘하자.... 무섭다..',
    hashtag: '#미래, #로봇, #100년후, #무섭다, #미리, #잘하자',
    likeCount: 2,
    filledLikeCount: 3,
    prompt:
      'AI robot , Art by Philippe Druillet style, best composition, digital painting, comics, contemporary, fantasy, French, science-fiction',
    Nprompt:
      'animal, out of frame, low resolution, blurry, worst quality, fuzzy, lowres, text, low quality, normal quality, signature, watermark, grainy, ((Drawn)), Drawings, Painting, art, low resolution, bad proportions, cropped, duplicate, malformed, cropped, pixelated, sketch, grayscale',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image102ac7cb-b721-47e4-ae38-82f3e4887925.webp',
    title: '귀여운 용',
    content:
      '도마뱀 아님, 용임, 용 너무 귀여움. 다음에는 날개 달린 용을 만들어야지, wing을 달아야 겠다. 그래도 이것도 괜찮다',
    hashtag: '#용, #귀여움',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'photorealistic blue baby dragon, extremely cute and adorable, cute reflective eyes, by cgsociety and greg olsen and zbrush and disney, pixar animation, unreal engine, cinematic smooth, intricate detail, cinematic , forest background, 8k',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imageb10f8ffe-565d-4a5d-8743-950f7853763e.webp',
    title: '무서운 사진',
    content:
      '너무 무서운 사진이 나왔다... 이런걸 파란건 아닌데, 좀 더 부연설명을 추가해야겠다.',
    hashtag: '#무서움, #놀람',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'hyper-detailed a long black straight-haired woman with strong shining gold glaring eyes, front view, by Yuri Shwedoff style, highly detailed face, digital art, impressionism, deep gaze, best composition, dark-clouded background, creepy mood',
    Nprompt:
      'poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, body out of frame, watermark, distorted face, bad anatomy extra anatomy, extra face, extra arms, extra fingers, extra hands, extra legs, extra feet, extra toe, mutated hands',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image086d0854-cec2-42b0-9f53-78cac090c654.webp',
    title: '빠따는 이렇게 드는거야',
    content:
      '스케치 형태로 야구선수와 코치를 생성해보았다 홈런까지 단 몇걸음 열심히 하자잉 ⚾',
    hashtag: '#야구, #야구선수, #스케치, #그림',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'A baseball batter is seen in the front, preparing to hold the bat behind his shoulder. The referee stands right behind him. They both stare at me. sketch, abstract',
    Nprompt: 'realistic, concrete, detail',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image55305dae-c84f-405b-9d6f-b94930cb357d.webp',
    title: '해리포터 레고 완성!',
    content:
      '직접 찍은 거같지만, ai로 생성 하였습니다. 해리포터는 너무 재밌다 꼭 보세요.',
    hashtag: '#해리포터',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'lego version of harry potter, harry potter portrait, blender, octane renderer, highly detailed 8k, toy, lego, lego shaped, global illumination, miniature filter',
    Nprompt:
      'out of frame, low resolution, blurry, worst quality, fuzzy, lowres, text, ow quality, normal quality, signature, watermark, grainy',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagea7967f5e-3841-4756-a401-fa07c715858d.webp',
    title: '해변과 구름 속 석양',
    content:
      '출렁거리는 바다물결과 구름 속 가려진 석양을 생성해 보았다. 되게 현실적으로 나와서 신기방기~',
    hashtag: '#석양, #바다, #구름, #힐링, #와우',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'photo, Shimmering ocean waves, under a cloudy blue sky, golden hour lighting, sunshine, vibrant colors, high-resolution',
    Nprompt:
      'out of frame, low resolution, blurry, worst quality, fuzzy, lowres, text, low quality, normal quality, signature, watermark, grainy',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image80646429-d22a-4262-b5b0-4e3322ce9cd0.webp',
    title: '여신상',
    content:
      '매우 위엄있고 퀄리티 높은 여신상 고고하고 아름다운 여신상이 나왔다. 특히나 뒤에 달이 맘에든다 나중엔 배경 프롬프트도 추가해봐야지',
    hashtag: '#여신상, #아름다움, #동상',
    likeCount: 1,
    filledLikeCount: 2,
    prompt:
      'hyper-detailed holy goddess holding a golden moon, front view, by Ellen Jewett style, highly detailed face, digital art, impressionism, deep gaze, best composition, dark-clouded background, center view, front view',
    Nprompt:
      'frame, text, logo, watermark, photo realistic, close up, out of frame, awkward shape, wrong shape, smudge, blurry, grainy, low quality, worst quality, normal quality, low res, uneven shape, mutated, duplicate, poorly drawn, ugly, deformed, watermark, cut off, cropped, distorted eyes, strabismus',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701245312133',
    _id: 'wogus2506',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image33507bac-f92d-48af-b2ec-f530d5879e15.webp',
    title: 'Eagle',
    content:
      '불사조같이 만들고싶었는데 나중엔 불꽃깃털이라는 프롬프트를 추가해봐야겠다. 그래도 구도 자체는 멋있는 독수리',
    hashtag: '#독수리, #불꽃날개, #불꽃눈빛',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'hyper-detailed energy collors, fierce-looking eagle in center composition, a head-on gaze, close up, , detailed fur texture, strong glowing geometric, dark-clouded background, foggy, stormy, cinematic, highly detailed, intricate detail. 8k, surrealism,trending on artstation, best composition, front view, by Yuri Shwedoff style, highly detailed face, digital art, impressionism, deep gaze, best composition, monotone, golden eyes that shine intensely, large contrast of light and shade',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image33a36e7a-3530-4343-9475-9c27993f2a22.webp',
    title: '홀로 남은...아이....',
    content:
      '이 아이가... 재미를 알까요?? 외로워 보이네요.. 근데 나라면 재밋게 놀것같긴해',
    hashtag: '#혼자, #집에서, #겜, #좋다',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Chronicle of Teddy Bear: Winnie The Pooh, as it becomes a cherished companion for generations of children, Soft Lighting, Whimsical, Intricate, Highly detailed, Digital painting, nostalgic charm, gentle colors, art by loish and ruan jia and ross tran',
    Nprompt: '',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imagee3d10f9e-0fdb-4a85-bfa4-d9c224fef8ee.webp',
    title: '까불다 피 본다',
    content:
      '무서운 빨간 색 아저씨가 나와서 놀랐다 이런 것도 필요한 사람이 있을 꺼 같으니 업뎃~ 영화의 한장면 같다 ㅎㅎ😁',
    hashtag: '#피, #아저씨, #영화',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Impressionist oil painting, Anger, Dark Carmine background color tone, Impressionist oil painting, gender-neutral person',
    Nprompt:
      'extra fingers, ugly, photorealistic, 3d, monochrome, distorted face, bad anatomy, writing, words, unfocused, cropped, extra limbs, realism',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243555507',
    _id: 'kimyuwon',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image5053dda9-3bb2-4717-869b-6964ca5eaf1e.webp',
    title: '집 좋다~~~!',
    content: '이런집.. 탐난다.... 언젠가는 저런 곳에서 살아야지..',
    hashtag: '#집, #10년후, #내돈내산 한다',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'masterpiece, best quality, photorealistic, dramatic lighting, ultra realistic details',
    Nprompt:
      '(out of frame), (text), Drawings, Painting, art, ((Drawn)), low resolution, blurry, worst quality, thick thighs:1.2, bad proportions, bad anatomy, cropped, jpeg artifacts, duplicate, malformed, cropped, cut off, cropped, distorted, strabismus',
    dt: '2023-11-29',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701243815344',
    _id: 'dldmlgus',
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/image895ec3a0-7f87-4eeb-82c1-16ed3ee53137.webp',
    title: '알록달록한 앵무우새애',
    content:
      '귀여운 앵무새를 만들어 보았다 날개를 휘젓는 건지 날개가 3개인건지 모르겠지만 귀엽다 그냥 이쁘고 귀엽다',
    hashtag: '#빨주노초파남보, #앵무새, #나 앵무새 아니다',
    likeCount: 0,
    filledLikeCount: 1,
    prompt:
      'Vector guacamaya artwork, isometric view, street art-style graffiti, vibrant colors, highly detailed, centered design, ready-to-print, plain white background.',
    Nprompt:
      ' background with paint splashes, images beyond the animal, t-shirts, mockups, out of frame, low resolution, blurry, worst quality, fuzzy, lowres, text, low quality, normal quality, signature, watermark, grainy, ((Drawn)), Drawings, Painting, art, low resolution, bad proportions, cropped, duplicate, malformed, cropped, pixelated, sketch, grayscale, poorly drawn hands, poorly drawn feet, poorly drawn face, out of frame, body out of frame, watermark, distorted face, bad anatomy, missing anatomy, missing body, missing face, missing legs, missing fingers, missing feet, missing toe, fewer digits, extra limbs, extra anatomy, extra face, extra arms, extra fingers, extra hands, extra legs, extra feet, extra toe, mutated hands, ugly, mutilated, disfigured, mutation, bad proportions, cropped head, cross-eye, mutilated, distorted eyes, strabismus, skin blemishes',
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
    img: 'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/imaged4a79795-fdf1-4e6f-9704-1695406a72e2.webp',
    title: '남자? 여자?',
    content: 'ai 무섭다... 남녀를 하나로 만들어버림 이것이 현대 예술..??',
    hashtag: '#착시, #현대 예술',
    likeCount: 3,
    filledLikeCount: 4,
    prompt:
      'human line drawing, vector, simple design, Adobe illustrator, svg, ultra-detailed, design project, dark background, same line thickness, center front view',
    Nprompt:
      'font, cluster, typo, out of frame, text, crop image, people, nsfw, close up, cropped, bad proportions, ugly, disfigured, blurry, pixelated, hideous, indistinct, out of frame, text, letters, watermark',
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
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'dldmlgus',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-f9e8e98e-6ea4-4b6f-a338-33f2c80de6b4.webp?alt=media',
    title: '겨울밤의 은하수',
    content:
      '차가운 겨울밤에 반짝이는 은하수를 통해 우주의 신비를 탐구합니다. 겨울밤의 은하수는 어떤 감정을 불러일으나요? 경이? 무한함? 아니면 조용한 감탄?',
    hashtag: 'winter, galaxy, stars, awe, cosmos',
    likeCount: 210,
    filledLikeCount: 211,
    prompt: 'winter, galaxy, stars, awe, cosmos',
    Nprompt: 'night sky, cold, solitude',
    dt: '2023-11-20',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'leeuihyun',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtY3BtenA%3D-6d4ca42c-b8b5-4eaa-ad68-2ac527225b1d.webp?alt=media',
    title: '봄날의 꽃길',
    content:
      '따스한 봄날, 꽃으로 가득한 길을 거닐며 자연의 아름다움을 느낍니다. 봄날의 꽃길은 어떤 기분을 줄까요? 활기? 희망? 아니면 재생?',
    hashtag: 'spring, flowers, bloom, rejuvenation, hope',
    likeCount: 220,
    filledLikeCount: 221,
    prompt: 'spring, flowers, bloom, rejuvenation, hope',
    Nprompt: 'petals, fragrance, renewal',
    dt: '2023-11-20',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'choijinwoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-88ee2830-c6f0-449e-9139-ff70667c73c3.webp?alt=media',
    title: '고대 숲의 신비',
    content:
      '오랜 시간을 거쳐온 고대 숲의 신비로움과 고요함을 탐구합니다. 고대 숲은 어떤 느낌을 줄까요? 신비? 고요함? 아니면 영원성?',
    hashtag: 'ancient, forest, mystery, serenity, eternity',
    likeCount: 230,
    filledLikeCount: 231,
    prompt: 'ancient, forest, mystery, serenity, eternity',
    Nprompt: 'trees, age, timelessness',
    dt: '2023-11-20',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'jongyong',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-882b9d30-96fb-4092-ba3f-2eefd24f7382.webp?alt=media',
    title: '나무와 강물의 울림',
    content:
      '자연 속 나무의 속삭임과 강물의 흐름을 통해 자연의 조화와 울림을 탐구합니다. 나무와 강물의 울림은 어떤 느낌을 줄까요? 조화? 평온? 아니면 생명력?',
    hashtag: 'nature, trees, river, harmony, tranquility',
    likeCount: 100,
    filledLikeCount: 101,
    prompt: 'woods, water, serenity, life',
    Nprompt: 'whispers, flow, peace',
    dt: '2023-11-19',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'choijinwoo',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZnFwenM%3D-637d1acf-8c85-4910-9f51-405fa6651b13.webp?alt=media',
    title: '고대 숲의 신비',
    content:
      '오랜 시간을 거쳐온 고대 숲의 신비로움과 고요함을 탐구합니다. 고대 숲은 어떤 느낌을 줄까요? 신비? 고요함? 아니면 영원성?',
    hashtag: 'ancient, forest, mystery, serenity, eternity',
    likeCount: 230,
    filledLikeCount: 231,
    prompt: 'ancient, forest, mystery, serenity, eternity',
    Nprompt: 'trees, age, timelessness',
    dt: '2023-11-20',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'hookbro',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtNGJzbmQ%3D-a9d940e1-5743-4c65-8dc5-fa9ea9127829.webp?alt=media',
    title: '도심의 비 오는 거리',
    content:
      '도시의 번화가에서 내리는 비를 통해 도시의 다른 면을 탐구합니다. 비 오는 거리의 모습은 어떤 감정을 자아낼까요? 반짝임? 몽환? 아니면 잔잔함?',
    hashtag: 'rain, city, lights, reflection, tranquility',
    likeCount: 240,
    filledLikeCount: 241,
    prompt: 'rain, city, lights, reflection, tranquility',
    Nprompt: 'urban, wet streets, solitude',
    dt: '2023-11-10',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'dreamer123',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-b74d885d-3ed9-4fc6-a9c6-793e3f062f6d.webp?alt=media',
    title: 'Starry Night Reflections',
    content:
      'Gazing at the starry night sky and its reflection on a tranquil lake. What emotions does this scene evoke in you? Wonder? Serenity? Awe?',
    hashtag: 'stars, night, reflections, wonder, serenity',
    likeCount: 150,
    filledLikeCount: 151,
    prompt: 'starry night, reflections, wonder, serenity',
    Nprompt: 'cosmic, peaceful, universe',
    dt: '2023-11-20',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'skygazer22',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-0758815c-1e15-4a2d-9988-182cdd994136.webp?alt=media',
    title: 'Dancing Auroras',
    content:
      'Witnessing the northern lights dance across the Arctic sky. What do you feel as you watch this natural spectacle? Enchantment? Majesty? Thrill?',
    hashtag: 'aurora, northern lights, dance, enchantment, majesty',
    likeCount: 180,
    filledLikeCount: 181,
    prompt: 'aurora, northern lights, dance, enchantment, majesty',
    Nprompt: 'polar lights, celestial beauty, wilderness',
    dt: '2023-11-15',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'naturelover88',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtOXpmcGM%3D-f0239be6-f246-4255-bfa5-ae0152fbe327.webp?alt=media',
    title: 'Whispers of the Forest',
    content:
      'Listening to the gentle whispers of the forest as the leaves rustle in the breeze. What sensations does this serene moment bring? Connection? Calm? Harmony?',
    hashtag: 'forest, whispers, connection, calm, harmony',
    likeCount: 220,
    filledLikeCount: 221,
    prompt: 'forest, whispers, connection, calm, harmony',
    Nprompt: 'woodland murmurs, peacefulness, unity',
    dt: '2023-11-12',
  },
  {
    profile_id:
      'https://imagination-leechi.s3.ap-northeast-2.amazonaws.com/1701290031747',
    _id: 'adventureseeker',
    img: 'https://firebasestorage.googleapis.com/v0/b/karlo-generation-images-prod/o/NB%2FNBs4hsgU7pYABhiSxajJ5Grxzy53%2Fgenerated%2Fa2%2Fa2FybG8tdHJpdG9uLTY5NDliOGRjNWYtZ2hodmQ%3D-8cd881e6-4e21-4b95-87cb-3d3a97ad78ba.webp?alt=media',
    title: 'The Call of the Wild',
    content:
      'Answering the call of the wild as you embark on a rugged adventure in the heart of nature. How does this journey make you feel? Freedom? Thrill? Connection?',
    hashtag: 'wild, adventure, freedom, thrill, connection',
    likeCount: 260,
    filledLikeCount: 261,
    prompt: 'wild, adventure, freedom, thrill, connection',
    Nprompt: 'untamed, exhilarating, oneness',
    // dt: '2023-11-07',
    dt: getTodayDate(),
  },
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
