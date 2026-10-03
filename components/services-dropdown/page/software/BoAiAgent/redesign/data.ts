import type { AiAgentPageData } from './types';

export const aiAgentPageData: AiAgentPageData = {
  hero: {
    eyebrow: 'KEDI AI Workforce',
    title: 'Gâu Đần — đội ngũ AI làm việc cùng doanh nghiệp',
    highlight: 'AI-first không phải là mua thêm một công cụ. Đó là thay cách công việc được vận hành.',
    quoteLabel: 'Tiêu chí quan trọng nhất về AI-first của KEDI',
    quote: '“Giữ thầy, bỏ thợ”',
    description:
      'Những AI Agent này xử lý được các công việc lặp đi lặp lại với khối lượng rất lớn, không than vãn, không than thở. Sửa đi sửa lại, thay đổi yêu cầu giữa chừng, thậm chí lật lại toàn bộ dự án, nó vẫn làm. Đặc biệt, nó còn chủ động đóng góp giải pháp, trong khi giữa người với người, chúng ta mất rất nhiều thời gian chỉ để xử lý cảm xúc.',
    stats: [
      { value: '80%', label: 'công đoạn trong việc bán hàng dùng AI Agent' },
      { value: '90%+', label: 'công đoạn “làm” bởi AI' },
      { value: '24/7', label: 'quy trình chạy liên tục không nghỉ' },
    ],
  },
  filters: [
    { id: 'all', label: 'Tất cả' },
    { id: 'sales', label: 'Bán hàng' },
    { id: 'care', label: 'CSKH' },
    { id: 'web', label: 'Website' },
    { id: 'operations', label: 'Vận hành' },
    { id: 'legal', label: 'Pháp chế' },
    { id: 'hr', label: 'HR' },
    { id: 'education', label: 'Đào tạo' },
  ],
  agents: [
    {
      id: 1,
      name: 'Kedi Quản Trị',
      role: 'AI Agent quản trị doanh nghiệp, bộ não điều hành',
      description:
        'Chủ doanh nghiệp hỏi một câu khó: “tăng giá 30% hay giảm giá lấy quy mô?”, “bao nhiêu tiền đang treo vì quên chăm khách?”. Kedi Quản Trị ngồi trên toàn bộ dữ liệu 10 năm (hợp đồng, báo giá, giờ công, hội thoại khách) rồi trả lời kèm số, kèm lập luận, kèm việc cần làm. Kết nối thẳng CRM, ERP có sẵn của doanh nghiệp.',
      image: '/software-clone/ai-agent/assets/kedi-quan-tri.png',
      status: 'chay',
      system: 'core',
      systemLabel: 'Đầu não của KEDI 1.0',
      categories: ['operations'],
      featured: true,
    },
    {
      id: 2,
      name: 'Kedi Webmaster',
      role: 'AI Agent quản trị website',
      description:
        'Thả vào nhóm Zalo của khách. Chủ doanh nghiệp nhắn một câu, “đổi banner”, “viết 5 bài chuẩn SEO”, “web load chậm xử lý đi”, là Kedi Webmaster điều phối hơn 20 agent con bên dưới để tự làm, không cần thuê designer, content hay lập trình viên.',
      image: '/software-clone/ai-agent/assets/kedi-automate.png',
      status: 'ban',
      system: 'web',
      systemLabel: 'Cổng của KEDI Web 1.0',
      categories: ['web'],
    },
    {
      id: 3,
      name: 'Kedi Chăm Sóc Lead',
      role: 'AI Agent trả lời tự động & quản lý Lead',
      description:
        'Trực tổng đài đa kênh (website, Messenger, Zalo OA, tổng đài ảo), gom mọi cuộc trò chuyện về một hồ sơ lead, tự nhắc deal và nuôi khách tới lúc chốt. Chính con bot đang trả lời khách trên hệ thống KEDI là Kedi Chăm Sóc Lead.',
      image: '/software-clone/ai-agent/assets/kedi-cham-soc-lead.png',
      status: 'ban',
      system: 'sales',
      systemLabel: 'Cổng của KEDI Sales 1.0',
      categories: ['sales', 'care'],
    },
    {
      id: 4,
      name: 'Kedi Chốt Đơn',
      role: 'AI Agent chatbot chốt đơn tự động',
      description:
        'Bản cho bán lẻ & e-commerce: dí khách chốt đơn đa kênh (Web, Shopee, TikTok Shop, Messenger, Zalo), tự lên đơn, tạo mã QR VietQR, đối soát đã thanh toán, gom đơn ba sàn và đẩy sang đơn vị vận chuyển, rồi nuôi lại khách qua Zalo.',
      image: '/software-clone/ai-agent/assets/kedi-commerce.png',
      status: 'ban',
      system: 'commerce',
      systemLabel: 'Cổng của KEDI Commerce 1.0',
      categories: ['sales'],
    },
    {
      id: 5,
      name: 'Kedi Pháp Chế',
      role: 'AI Agent soạn hợp đồng & pháp chế',
      description:
        'Account nhắn tự nhiên trong Telegram, Gấu đọc tài liệu nguồn rồi soạn hợp đồng, biên bản, phụ lục, giấy đề nghị thanh toán; tự suy đúng pháp nhân & VAT, render khuôn vàng không lọt ô trống. Sếp bấm Duyệt là tự ký nháy, in và ký điện tử AMIS WeSign.',
      image: '/software-clone/ai-agent/assets/kedi-phap-che.png',
      status: 'ban',
      system: 'legal',
      systemLabel: 'Cổng của KEDI Legal 1.0',
      categories: ['legal', 'operations'],
    },
    {
      id: 6,
      name: 'Kedi Báo Giá',
      role: 'AI Agent báo giá tự động',
      description:
        'Account nhắn yêu cầu, Gấu research số liệu thật (DataForSEO), bóc scope rồi dựng báo giá & proposal SEO, website, phần mềm, media; xuất Google Doc/Sheet/Slides chia sẻ sẵn, đúng nhận diện KEDI, số liệu trung thực để gửi khách trong vài phút.',
      image: '/software-clone/ai-agent/assets/kedi-analytics.png',
      status: 'ban',
      system: 'sales',
      systemLabel: 'Cổng của KEDI Sales 1.0',
      categories: ['sales'],
    },
    {
      id: 7,
      name: 'Kedi Golden',
      role: 'AI Agent tư vấn viên & chăm sóc y tế cho người già',
      description:
        'Trực Web · Zalo · Messenger 24/7. Tư vấn người quan tâm chọn cơ sở, đồng hành cùng người cao tuổi: nhắc thuốc, nhắc lịch khám, hỏi đáp sức khoẻ, hoá giải lo lắng cảm xúc; trả lời trong 30 giây kể cả lễ Tết.',
      image: '/software-clone/ai-agent/assets/kedi-chat.png',
      status: 'trienkhai',
      system: 'care',
      systemLabel: 'Cổng của KEDI Care 1.0',
      categories: ['care'],
    },
    {
      id: 8,
      name: 'Kedi Corgi',
      role: 'AI kết nối bệnh nhân & người nhà',
      description:
        '7h sáng tự gửi nhật ký chăm sóc: bữa ăn, giấc ngủ, sinh hiệu kèm ảnh. Cảnh báo sức khoẻ chủ động, nhắc viện phí kèm mã QR VietQR điền sẵn, để người nhà luôn an tâm thay vì gọi điện hỏi liên tục.',
      image: '/software-clone/ai-agent/assets/kedi-cham-soc-lead.png',
      status: 'trienkhai',
      system: 'care',
      systemLabel: 'Cổng của KEDI Care 1.0',
      categories: ['care'],
    },
    {
      id: 9,
      name: 'Kedi Trực Ban',
      role: 'AI Agent hỗ trợ quản lý & vận hành viện dưỡng lão, bệnh viện',
      description:
        'Báo cáo sáng tự động (doanh thu, công nợ, công suất, lead), hỏi đáp số liệu tự nhiên, và hành động ngay trong chat: duyệt việc, giao nhắc, cảnh báo công nợ & hợp đồng đến hạn.',
      image: '/software-clone/ai-agent/assets/kedi-quan-tri.png',
      status: 'trienkhai',
      system: 'care',
      systemLabel: 'Cổng của KEDI Care 1.0',
      categories: ['care', 'operations'],
    },
    {
      id: 10,
      name: 'Kedi Lớp Phó',
      role: 'AI Agent trợ giảng eLearning',
      description:
        'Sát cánh cùng giảng viên trong mọi khâu xây dựng & bán khoá học online: lên kịch bản bài giảng, soạn slide & quiz, dựng video, viết landing khoá học, chạy phễu quảng cáo và chốt học viên, biến một chuyên gia thành một “trung tâm đào tạo”.',
      image: '/software-clone/ai-agent/assets/kedi-lop-pho.png',
      status: 'xay',
      system: 'elearning',
      systemLabel: 'Cổng của KEDI eLearning 1.0',
      categories: ['education'],
    },
    {
      id: 11,
      name: 'Kedi Vận Hành Elearning',
      role: 'AI Agent vận hành hệ thống học online',
      description:
        'Lo phần “sống” của lớp học: nhắc học viên vào học, chấm bài & hỏi đáp 24/7, theo dõi tiến độ từng người, cảnh báo học viên sắp bỏ học và gợi ý upsell khoá tiếp theo, giữ tỷ lệ hoàn thành & doanh thu khoá học.',
      mono: 'VH',
      status: 'xay',
      system: 'elearning',
      systemLabel: 'Cổng của KEDI eLearning 1.0',
      categories: ['education', 'operations'],
    },
    {
      id: 12,
      name: 'Kedi Tuyển Dụng',
      role: 'AI Agent tuyển dụng · phỏng vấn tự động · tự động hóa 80% quy trình',
      description:
        'Không lọc bằng CV: Gấu cho ứng viên xử 3 tình huống khách hàng thật, chấm điểm khách quan kèm bằng chứng từng câu, tự gửi email, tự xếp lịch phỏng vấn với leader. KEDI đang tuyển Account bằng chính con này: khoảng 12.000đ tiền ads cho một CV qua vòng trong, 80% quy trình tự chạy, leader chỉ còn duyệt hồ sơ và phỏng vấn 1-1.',
      image: '/software-clone/ai-agent/assets/kedi-tuyen-dung.png',
      status: 'chay',
      system: 'hrm',
      systemLabel: 'Cổng của KEDI HRM 1.0',
      categories: ['hr'],
    },
    {
      id: 13,
      name: 'Kedi Chăm Sóc',
      role: 'AI chăm sóc khách hàng · hỗ trợ account, sale, tư vấn viên và hành động giúp',
      description:
        'Đứng cạnh đội account/sale như một co-pilot: nhận lead nóng, điều phối gọi gấp trong 3 phút, trả lời giùm lúc khách nhắn ngoài giờ, dựng tài liệu & nhắc deal, và tự hành động thay (tạo phiếu, cập nhật hồ sơ, gửi tin) tới khi ký hợp đồng.',
      image: '/software-clone/ai-agent/assets/kedi-cham-soc-lead.png',
      status: 'noibo',
      system: 'sales',
      systemLabel: 'Cổng của KEDI Sales 1.0',
      categories: ['sales', 'care'],
    },
    {
      id: 14,
      name: 'Kedi TeleSales',
      role: 'AI Agent gọi điện telesales, gọi ra & remarketing bằng voice',
      description:
        'Gọi ra vài ngàn cuộc mỗi ngày bằng giọng nói tự nhiên như người thật: chào hỏi, tư vấn liệu trình, lắng nghe khách trả lời rồi lọc đúng người quan tâm. Đánh thức data khách cũ, remarketing tự động bằng voice, không cần thêm nhân viên.',
      image: '/software-clone/ai-agent/assets/kedi-chat.png',
      status: 'trienkhai',
      system: 'sales',
      systemLabel: 'Cổng của KEDI Sales 1.0',
      categories: ['sales'],
    },
    {
      id: 15,
      name: 'Kedi Thức Khuya',
      role: 'AI Agent email remarketing',
      description:
        'Đêm nào cũng đọc lại hồ sơ khách cũ đã nguội, rồi tự viết email cá nhân hóa nhắn lại từng người: có câu chuyện, có offer, và khi khách trả lời thì tự trả lời tiếp. Không spam, không hứa lèo.',
      image: '/software-clone/ai-agent/assets/kedi-thuc-khuya.png',
      status: 'chay',
      systemLabel: 'Remarketing tự động',
      categories: ['sales'],
    },
  ],
  system: {
    eyebrow: '3D Connected KEDI System',
    title: 'Một Agent ở phía trước. Cả hệ sinh thái KEDI ở phía sau.',
    description:
      'AI Agent chỉ là khuôn mặt để con người ra lệnh bằng ngôn ngữ tự nhiên. Sức mạnh thật nằm ở KEDI 1.0, dữ liệu, workflow và các hệ thống nghiệp vụ được kết nối phía sau để AI có thể hiểu ngữ cảnh, tự quyết định và tự hành động.',
    layers: [
      {
        id: 'human',
        eyebrow: '01 · Con người',
        title: 'Ra lệnh bằng lời',
        description: 'Qua kênh quen: Web · Zalo · Messenger · Tổng đài',
      },
      {
        id: 'agent',
        eyebrow: '02 · AI Agent',
        title: 'Cổng giao tiếp',
        description: 'Hiểu ý, hỏi lại khi thiếu, trả lời bằng ngôn ngữ tự nhiên',
      },
      {
        id: 'brain',
        eyebrow: '03 · KEDI 1.0',
        title: 'Bộ não',
        description: 'Dữ liệu 360° · suy luận · tự hành động · ghi nhớ',
      },
      {
        id: 'business',
        eyebrow: '04 · Nghiệp vụ',
        title: 'Hệ thống thật',
        description: 'ERP/CRM · Website · Kho · Thanh toán · Hồ sơ',
      },
    ],
    products: [
      { id: 'crm', label: 'Kedi CRM', detail: 'Customer & lead context', href: '/kedi-crm' },
      { id: 'automate', label: 'Kedi Automate', detail: 'Cross-app workflow', href: '/kedi-automate' },
      { id: 'analytics', label: 'Kedi Analytics', detail: 'Business intelligence', href: '/kedi-analytics' },
      { id: 'commerce', label: 'Kedi Commerce', detail: 'Order & inventory', href: '/kedi-commerce' },
    ],
  },
  workflow: {
    eyebrow: 'Nguyên lý triển khai',
    title: 'Giao việc cho Gâu Đần không bắt đầu bằng việc mua thêm một tài khoản AI.',
    description:
      'Triển khai AI-first là đưa AI vào tận lõi quy trình: mô hình ngôn ngữ lớn để đọc, hiểu và viết như người; dữ liệu để nhớ và đối chiếu; công cụ để hành động trên hệ thống thật.',
    warningTitle: 'Nếu chỉ phát tài khoản AI cho nhân viên và nói “hãy dùng AI”, điều gì xảy ra?',
    warnings: [
      'Không có công việc nào nhanh hơn.',
      'Không có công việc nào tốt hơn.',
      'Không có chuyện cả công ty làm được nhiều việc hơn.',
    ],
    steps: [
      {
        step: '01',
        title: 'Quy trình phải chuẩn chỉnh: bước nào người, bước nào máy',
        description:
          'Vẽ lại quy trình cho rõ ràng trước khi đụng tới phần mềm: việc nào bắt buộc con người quyết, việc nào giao hẳn cho máy. Quy trình còn mù mờ thì AI chỉ tự động hóa chính sự mù mờ đó, nhanh hơn.',
      },
      {
        step: '02',
        title: 'Chạy kiểm thử bằng phần mềm ver 1',
        description: 'Dựng phiên bản 1 rồi cho chạy trên việc thật, dữ liệu thật, người thật.',
      },
      {
        step: '03',
        title: 'Nghiêm túc, quyết liệt sửa các vấn đề của quy trình mới',
        description:
          'Quy trình mới chắc chắn sẽ lòi ra vấn đề. Sửa nghiêm túc, quyết liệt, không nể nang thói quen cũ. Đây là bước phân định công ty AI-first thật với công ty “có mua AI”.',
      },
      {
        step: '04',
        title: 'Hoàn chỉnh phần mềm AI tự động hóa',
        description:
          'Khi quy trình đã đứng vững, hoàn chỉnh phần mềm: AI nhận trọn công đoạn, con người chỉ còn duyệt những khâu nhạy cảm.',
      },
      {
        step: '05',
        title: '“Lây lan, bám rễ” tới những công đoạn khác của công ty',
        description:
          'Lặp lại đúng vòng này cho công đoạn kế tiếp. AI-first không phải một cú nhảy: nó lan từng quy trình một, bám rễ tới khi cả công ty vận hành theo kiểu mới.',
      },
    ],
  },
  comparison: {
    eyebrow: 'So sánh',
    title: 'Phần mềm AI Agent khác gì tài khoản ChatGPT, Gemini?',
    highlight: 'AI Agent',
    description:
      'Rất nhiều doanh nghiệp đang “chuyển đổi AI” bằng cách mua tài khoản ChatGPT, Gemini phát cho nhân viên. Khác biệt cốt lõi gói trong một câu: tài khoản AI là công cụ nằm chờ người xài, còn phần mềm AI Agent là nhân sự số tự làm việc.',
    definition: {
      term: 'AI Agent',
      pos: 'danh từ · phần mềm AI',
      note: 'Một nhân sự số nhận mục tiêu, tự chia việc, gọi công cụ và làm tới kết quả trên hệ thống thật của doanh nghiệp.',
      items: [
        'Phần mềm biết tự ra quyết định và tự làm việc, không phải chatbot trả lời theo kịch bản.',
        'Nhận một mục tiêu, AI Agent tự chia nhỏ thành các bước rồi tự gọi công cụ và báo lại kết quả.',
        'Hành xử gần như một nhân sự: không ngủ, không quên việc và luôn để lại log hành động.',
      ],
    },
    headers: {
      beforeLabel: 'Tài khoản ChatGPT · Gemini',
      beforeTitle: 'Công cụ nằm chờ người xài',
      afterLabel: 'Phần mềm AI Agent',
      afterTitle: 'Nhân sự số lắp thẳng vào quy trình',
    },
    rows: [
      {
        key: 'Cách chạy',
        before: 'Nhân viên tự nghĩ câu hỏi, hỏi từng câu, tự ráp kết quả.',
        after: 'Nhận mục tiêu, tự chia việc, tự làm tới xong.',
      },
      {
        key: 'Ai làm việc',
        before: 'Vẫn là con người làm, AI chỉ gợi ý.',
        after: 'Máy làm phần lặp lại, người chỉ duyệt khâu nhạy cảm.',
      },
      {
        key: 'Dữ liệu',
        before: 'Không biết gì về khách, đơn hàng, quy trình của công ty anh chị.',
        after: 'Nối thẳng CRM, đơn hàng, tổng đài, hiểu đúng công ty mình.',
      },
      {
        key: 'Kết quả',
        before: 'Hên xui theo tay người xài, mỗi người một kiểu.',
        after: 'Đầu ra đồng đều, đo được, có log từng hành động.',
      },
      {
        key: 'Nhân viên nghỉ việc',
        before: 'Kỹ năng đi theo người, công ty trắng tay.',
        after: 'Quy trình vẫn chạy, tri thức nằm trong hệ thống.',
      },
    ],
    conclusion: {
      before: 'Tài khoản AI là mua công cụ cho từng người.',
      after: 'Phần mềm AI Agent là lắp nhân sự số cho cả công ty. Đó là khác biệt giữa “có xài AI” và AI-first thật sự.',
    },
  },
  activity: {
    eyebrow: 'AI Workforce Activity',
    title: 'Một ngày làm việc của đội ngũ AI.',
    description:
      'Thay vì một carousel nhân vật, phần này cho thấy Agent đang gánh những loại công việc nào trong vận hành thực tế.',
    items: [
      {
        agent: 'Kedi Chăm Sóc Lead',
        action: 'Gom hội thoại đa kênh về một hồ sơ lead, tự nhắc deal và nuôi khách tới lúc chốt.',
        image: '/software-clone/ai-agent/assets/kedi-cham-soc-lead.png',
        state: '24/7',
      },
      {
        agent: 'Kedi Báo Giá',
        action: 'Research dữ liệu, bóc scope và dựng báo giá/proposal đúng brand để gửi khách.',
        image: '/software-clone/ai-agent/assets/kedi-analytics.png',
        state: 'Tự động',
      },
      {
        agent: 'Kedi Webmaster',
        action: 'Nhận yêu cầu bằng lời rồi điều phối các agent con để viết nội dung, sửa web và tối ưu tốc độ.',
        image: '/software-clone/ai-agent/assets/kedi-automate.png',
        state: 'Đang chạy',
      },
      {
        agent: 'Kedi Tuyển Dụng',
        action: 'Sàng lọc tình huống, chấm điểm, gửi email và xếp lịch phỏng vấn với leader.',
        image: '/software-clone/ai-agent/assets/kedi-tuyen-dung.png',
        state: '80% quy trình',
      },
    ],
  },
  evidence: {
    eyebrow: 'Vì sao tin được',
    title: '“Đang dùng thật” quan trọng hơn một video demo đẹp.',
    tags: ['khách hỏi xoáy', 'dữ liệu lệch', 'deadline gấp', 'tình huống ngoài kịch bản'],
    blocks: [
      {
        title: 'Va chạm thật',
        body:
          'Ai cũng có thể quay một clip AI Agent “làm được mọi thứ”. Nhưng một con agent chỉ chứng minh được giá trị khi nó sống sót qua va chạm thật: khách hỏi xoáy, dữ liệu lệch, deadline gấp, tình huống ngoài kịch bản. Mọi AI Agent trong danh sách này đều đã đi qua hàng nghìn lần va chạm như vậy bên trong KEDI trước khi được giao cho khách.',
      },
      {
        title: 'Nguyên tắc của KEDI',
        body:
          'Không bán cho khách thứ mà chính mình chưa dám dùng. Anh chị muốn lắp một AI Agent cho doanh nghiệp của mình thì bắt đầu từ những con đã đóng gói ở trên, hoặc nói chuyện trực tiếp để KEDI may đo theo ngành.',
      },
    ],
  },
  departments: {
    eyebrow: 'Ứng dụng theo phòng ban',
    title: 'AI Agent gánh đúng những việc lặp đi lặp lại ở từng bộ phận.',
    description:
      'AI Agent không thay cả công ty. Nó tập trung vào những điểm nghẽn có thể chuẩn hóa, kết nối dữ liệu và giao phần quyết định nhạy cảm lại cho con người.',
    items: [
      {
        index: '01',
        name: 'Bán hàng',
        title: 'Chốt đơn tự động đa kênh',
        description: 'Dí khách chốt đơn đa kênh, tự lên đơn, tạo QR thanh toán, gom đơn ba sàn.',
        agent: 'Kedi Chốt Đơn',
        image: '/software-clone/ai-agent/assets/kedi-commerce.png',
      },
      {
        index: '02',
        name: 'Chăm sóc khách hàng',
        title: 'Trả lời & quản lý lead 24/7',
        description: 'Trực đa kênh 24/7, gom hội thoại về một hồ sơ lead, tự nhắc deal tới khi chốt.',
        agent: 'Kedi Chăm Sóc Lead',
        image: '/software-clone/ai-agent/assets/kedi-cham-soc-lead.png',
      },
      {
        index: '03',
        name: 'Website & SEO',
        title: 'AI Agent quản trị website',
        description: 'Nhắn một câu trong Zalo, hơn 20 agent con tự viết bài SEO, sửa web, tối ưu tốc độ.',
        agent: 'Kedi Webmaster',
        image: '/software-clone/ai-agent/assets/kedi-automate.png',
      },
      {
        index: '04',
        name: 'Pháp chế & hợp đồng',
        title: 'Soạn hợp đồng & trình ký tự động',
        description: 'Đọc tài liệu nguồn, soạn hợp đồng, biên bản chuẩn pháp nhân & VAT, ký nháy điện tử AMIS WeSign.',
        agent: 'Kedi Pháp Chế',
        image: '/software-clone/ai-agent/assets/kedi-phap-che.png',
      },
      {
        index: '05',
        name: 'Báo giá & proposal',
        title: 'Báo giá SEO · website · media tự động',
        description: 'Research số liệu thật, dựng báo giá & proposal đúng brand ra Google Doc/Slides để gửi khách ngay.',
        agent: 'Kedi Báo Giá',
        image: '/software-clone/ai-agent/assets/kedi-analytics.png',
      },
      {
        index: '06',
        name: 'Marketing & nội dung',
        title: 'Sản xuất nội dung & SEO',
        description: 'Đào từ khoá, dựng dàn ý, viết bài chuẩn SEO, làm ảnh và banner theo lịch nội dung.',
        agent: 'Kedi Webmaster',
        image: '/software-clone/ai-agent/assets/kedi-automate.png',
      },
      {
        index: '07',
        name: 'Vận hành nội bộ',
        title: 'AI Agent quản trị nội bộ',
        description: 'Báo cáo sáng tự động, hỏi đáp số liệu tự nhiên, duyệt việc và cảnh báo công nợ trong chat.',
        agent: 'Kedi Quản Trị',
        image: '/software-clone/ai-agent/assets/kedi-quan-tri.png',
      },
      {
        index: '08',
        name: 'Tuyển dụng & đào tạo',
        title: 'Tự động sàng lọc & phỏng vấn',
        description: 'Sàng lọc ứng viên, phỏng vấn vòng đầu qua chat, chấm điểm ứng viên và hẹn lịch vòng sau.',
        agent: 'Kedi Tuyển Dụng',
        image: '/software-clone/ai-agent/assets/kedi-tuyen-dung.png',
      },
    ],
  },
  metrics: [
    { value: '24/7', label: 'AI Agent trực không nghỉ, trả lời trong 30 giây kể cả lễ Tết' },
    { value: '3 phút', label: 'điều phối gọi lead nóng ngay khi khách vừa nhắn' },
    { value: '14.000+', label: 'dự án KEDI đã triển khai, nơi đội AI Agent học quy trình làm web và nội dung' },
    { value: '85%', label: 'khách hàng gắn bó và quay lại với KEDI' },
  ],
  faqs: [
    {
      question: 'AI Agent là gì?',
      answer:
        'AI Agent là phần mềm AI tự nhận mục tiêu, tự lập kế hoạch và tự gọi công cụ để làm xong việc. Khác chatbot, nó không chỉ trả lời mà còn hành động trên hệ thống thật của doanh nghiệp.',
    },
    {
      question: 'AI Agent khác Chatbot thế nào?',
      answer:
        'Chatbot trả lời theo kịch bản lập sẵn rồi dừng lại. AI Agent dùng mô hình ngôn ngữ lớn hiểu ý, tự chia việc đa bước và làm tới kết quả. Một bên đưa câu trả lời, một bên đưa việc đã hoàn thành.',
    },
    {
      question: 'AI Agent của KEDI đã chạy thật chưa?',
      answer:
        'Rồi. Kedi Chăm Sóc Lead đang trực tổng đài thật trên hệ thống KEDI, Kedi Webmaster vận hành web và nội dung mỗi ngày. Nhiều AI Agent khác đang phục vụ khách hoặc dùng nội bộ KEDI.',
    },
    {
      question: 'Triển khai AI Agent cho doanh nghiệp mất bao lâu?',
      answer:
        'Với AI Agent đã đóng gói như Kedi Chăm Sóc Lead hay Kedi Chốt Đơn, anh chị dùng được gần như ngay. Bản may đo theo ngành cần KEDI khảo sát quy trình trước, thời gian tuỳ độ phức tạp.',
    },
    {
      question: 'Doanh nghiệp có cần biết code không?',
      answer:
        'Không. Anh chị ra lệnh cho AI Agent bằng tiếng Việt tự nhiên ngay trong Zalo hay Messenger. Phần kỹ thuật phía sau KEDI lo trọn gói.',
    },
    {
      question: 'AI Agent có an toàn dữ liệu không?',
      answer:
        'Mỗi AI Agent gắn với quyền hạn rõ ràng và có log đầy đủ mọi hành động. Khâu nhạy cảm luôn để con người duyệt trước khi agent thực thi.',
    },
    {
      question: 'Chi phí lắp một AI Agent thế nào?',
      answer:
        'Tuỳ anh chị cần AI Agent đóng gói hay may đo theo ngành. Nhắn KEDI mô tả việc đang nghẽn, KEDI báo giá đúng phạm vi qua hotline 1900 636 648.',
    },
  ],
  cta: {
    eyebrow: 'Build your AI workforce',
    title: 'Xây đội Gâu Đần cho doanh nghiệp của bạn.',
    description:
      'Nói cho KEDI biết anh chị đang bán gì, đội đang nghẽn ở khâu nào. KEDI sẽ đề xuất đúng AI Agent, dữ liệu và workflow cần kết nối thay vì bán một công cụ chung cho mọi doanh nghiệp.',
  },
};
