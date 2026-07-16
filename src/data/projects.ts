import type {
  LocalizedText,
  Project,
  ProjectGalleryItem,
} from "@/types/content";

const text = (vi: string, en: string): LocalizedText => ({ vi, en });

const gallery = (
  slug: string,
  captions: Array<[string, string]>,
): ProjectGalleryItem[] => {
  const scenes = ["overview", "detail", "system"] as const;

  return captions.map(([vi, en], index) => ({
    id: `${slug}-${scenes[index]}`,
    scene: scenes[index],
    alt: text(`Giao diện ${vi.toLocaleLowerCase("vi")}`, `${en} interface`),
    caption: text(vi, en),
  }));
};

export const projects: Project[] = [
  {
    id: "project-nexus-campus",
    slug: "nexus-campus",
    title: text("Nexus Campus", "Nexus Campus"),
    tagline: text(
      "Một điểm chạm cho toàn bộ nhịp sống học thuật.",
      "One touchpoint for the entire academic rhythm.",
    ),
    shortDescription: text(
      "Nền tảng web hợp nhất lịch học, hoạt động câu lạc bộ và tiến độ học tập cho sinh viên.",
      "A unified web platform for class schedules, club activities, and student progress.",
    ),
    category: "website",
    status: "completed",
    year: 2026,
    featured: true,
    role: text("Thiết kế sản phẩm và phát triển full-stack", "Product design and full-stack development"),
    overview: {
      context: text(
        "Thông tin học tập và hoạt động sinh viên thường nằm rải rác ở nhiều cổng khác nhau.",
        "Academic and student activity information was fragmented across multiple portals.",
      ),
      problem: text(
        "Sinh viên mất thời gian chuyển đổi giữa các hệ thống và dễ bỏ lỡ mốc quan trọng.",
        "Students spent time switching systems and frequently missed important milestones.",
      ),
      goal: text(
        "Tạo một trải nghiệm tập trung, nhanh và dễ dùng trên mọi thiết bị.",
        "Create one focused, fast, and device-friendly experience.",
      ),
      audience: text(
        "Sinh viên, ban chủ nhiệm câu lạc bộ và cố vấn học tập.",
        "Students, club leaders, and academic advisors.",
      ),
      solution: text(
        "MSCI xây dựng bảng tin ưu tiên theo ngữ cảnh, lịch hợp nhất và không gian theo dõi tiến độ cá nhân.",
        "MSCI built a contextual priority feed, a unified calendar, and a personal progress space.",
      ),
      result: text(
        "Prototype được kiểm thử với luồng chính dưới hai thao tác và đạt điểm usability 86/100.",
        "The prototype kept primary flows under two actions and reached an 86/100 usability score.",
      ),
    },
    visual: {
      motif: "orbit",
      primary: "#1677ff",
      secondary: "#21d4fd",
      tertiary: "#6366f1",
    },
    technologies: [
      { name: "Next.js", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "PostgreSQL", category: "database" },
      { name: "Figma", category: "design" },
      { name: "Playwright", category: "testing" },
    ],
    features: [
      {
        title: text("Lịch hợp nhất", "Unified calendar"),
        description: text(
          "Kết hợp lịch học, sự kiện và deadline trong một timeline có mức ưu tiên.",
          "Combines classes, events, and deadlines in one prioritized timeline.",
        ),
        icon: "layers",
      },
      {
        title: text("Bảng tin theo ngữ cảnh", "Contextual feed"),
        description: text(
          "Nội dung được sắp xếp theo chương trình học, câu lạc bộ và mối quan tâm.",
          "Content is ranked by program, clubs, and personal interests.",
        ),
        icon: "spark",
      },
      {
        title: text("Theo dõi tiến độ", "Progress tracking"),
        description: text(
          "Biến mục tiêu học kỳ thành các cột mốc nhỏ, dễ theo dõi.",
          "Turns semester goals into smaller, visible milestones.",
        ),
        icon: "chart",
      },
    ],
    gallery: gallery("nexus-campus", [
      ["Tổng quan bảng điều khiển sinh viên", "Student command center overview"],
      ["Chi tiết lịch học và sự kiện", "Class and event schedule detail"],
      ["Bản đồ luồng dữ liệu học tập", "Academic data flow map"],
    ]),
    challenges: [
      {
        title: text("Ưu tiên thông tin", "Information priority"),
        challenge: text(
          "Quá nhiều loại thông báo cạnh tranh sự chú ý trong cùng một thời điểm.",
          "Too many notification types competed for attention at the same time.",
        ),
        solution: text(
          "Nhóm xây thang điểm khẩn cấp và gom các nội dung liên quan thành từng cụm hành động.",
          "The team introduced urgency scoring and grouped related items into action clusters.",
        ),
      },
    ],
    memberIds: ["minh-anh", "gia-huy", "thao-vy"],
    seo: {
      keywords: ["student platform", "campus portal", "Next.js", "education"],
    },
  },
  {
    id: "project-terra-route",
    slug: "terra-route",
    title: text("Terra Route", "Terra Route"),
    tagline: text(
      "Mỗi hành trình nhỏ tạo nên một thành phố dễ thở hơn.",
      "Every small journey helps a city breathe better.",
    ),
    shortDescription: text(
      "Ứng dụng di động gợi ý tuyến đường xanh dựa trên thời gian, mức phát thải và phương tiện.",
      "A mobile app that recommends greener routes using time, emissions, and transport mode.",
    ),
    category: "mobile",
    status: "maintained",
    year: 2025,
    featured: true,
    role: text("Nghiên cứu UX và phát triển ứng dụng", "UX research and application development"),
    overview: {
      context: text(
        "Người đi lại muốn lựa chọn bền vững hơn nhưng thiếu dữ liệu so sánh dễ hiểu.",
        "Commuters wanted sustainable choices but lacked understandable comparisons.",
      ),
      problem: text(
        "Các ứng dụng bản đồ thường tối ưu thời gian mà bỏ qua dấu chân carbon.",
        "Most map products optimize time while hiding carbon impact.",
      ),
      goal: text(
        "Đưa tác động môi trường vào quyết định di chuyển mà không tăng độ phức tạp.",
        "Bring environmental impact into route decisions without adding complexity.",
      ),
      audience: text(
        "Sinh viên, người đi làm và cộng đồng sử dụng phương tiện công cộng.",
        "Students, commuters, and public-transport communities.",
      ),
      solution: text(
        "Ứng dụng so sánh các tuyến bằng thời gian, chi phí và CO₂, sau đó giải thích lựa chọn tốt hơn.",
        "The app compares routes by time, cost, and CO₂, then explains the better choice.",
      ),
      result: text(
        "Người thử nghiệm chọn tuyến phát thải thấp nhiều hơn 34% sau một tuần sử dụng.",
        "Test users selected lower-emission routes 34% more often after one week.",
      ),
    },
    visual: {
      motif: "routes",
      primary: "#21d4fd",
      secondary: "#2dd4bf",
      tertiary: "#1677ff",
    },
    technologies: [
      { name: "Flutter", category: "frontend" },
      { name: "Dart", category: "frontend" },
      { name: "Firebase", category: "backend" },
      { name: "Mapbox", category: "other" },
      { name: "Figma", category: "design" },
    ],
    features: [
      {
        title: text("So sánh ba chiều", "Three-way comparison"),
        description: text(
          "Đặt thời gian, chi phí và phát thải cạnh nhau để quyết định nhanh.",
          "Places time, cost, and emissions side by side for fast decisions.",
        ),
        icon: "chart",
      },
      {
        title: text("Thử thách xanh", "Green challenges"),
        description: text(
          "Ghi nhận chuỗi ngày di chuyển bền vững và các cột mốc cộng đồng.",
          "Tracks sustainable travel streaks and community milestones.",
        ),
        icon: "users",
      },
      {
        title: text("Tuyến an toàn", "Safer routes"),
        description: text(
          "Ưu tiên khu vực có đèn, làn xe và mật độ phù hợp theo thời điểm.",
          "Prioritizes lighting, lanes, and suitable traffic density by time of day.",
        ),
        icon: "shield",
      },
    ],
    gallery: gallery("terra-route", [
      ["Bản đồ tuyến đường xanh", "Green route map"],
      ["So sánh tác động chuyến đi", "Trip impact comparison"],
      ["Hệ thống tính điểm phát thải", "Emission scoring system"],
    ]),
    challenges: [
      {
        title: text("Dữ liệu không đồng nhất", "Inconsistent data"),
        challenge: text(
          "Nguồn dữ liệu giao thông có tần suất cập nhật và độ chính xác khác nhau.",
          "Transport sources had different update intervals and accuracy levels.",
        ),
        solution: text(
          "Một lớp chuẩn hóa gắn độ tin cậy cho từng nguồn trước khi tính tuyến.",
          "A normalization layer assigns confidence levels before route scoring.",
        ),
      },
    ],
    memberIds: ["gia-huy", "quang-khang", "thao-vy"],
    seo: {
      keywords: ["sustainable mobility", "Flutter", "green routes", "mobile app"],
    },
  },
  {
    id: "project-med-lens",
    slug: "med-lens-ai",
    title: text("MedLens AI", "MedLens AI"),
    tagline: text(
      "Biến dữ liệu phức tạp thành tín hiệu dễ kiểm chứng.",
      "Turning complex data into verifiable signals.",
    ),
    shortDescription: text(
      "Bản thử nghiệm hỗ trợ phân loại ảnh y khoa bằng mô hình thị giác và quy trình kiểm tra minh bạch.",
      "A prototype for medical-image triage with computer vision and a transparent review workflow.",
    ),
    category: "ai",
    status: "prototype",
    year: 2026,
    featured: true,
    role: text("Nghiên cứu, mô hình hóa và thiết kế giao diện", "Research, modeling, and interface design"),
    overview: {
      context: text(
        "Khối lượng ảnh cần sàng lọc tăng nhanh trong khi thời gian của chuyên gia có giới hạn.",
        "Screening volume grows quickly while specialist review time remains limited.",
      ),
      problem: text(
        "Kết quả AI thiếu ngữ cảnh và độ tin cậy dễ dẫn đến cách diễn giải sai.",
        "AI outputs without context or confidence can be misinterpreted.",
      ),
      goal: text(
        "Khám phá cách trình bày gợi ý AI có thể kiểm tra, không thay thế quyết định chuyên môn.",
        "Explore explainable AI assistance without replacing expert decisions.",
      ),
      audience: text(
        "Nhà nghiên cứu dữ liệu và chuyên gia y khoa trong môi trường thử nghiệm.",
        "Data researchers and medical specialists in a controlled research setting.",
      ),
      solution: text(
        "Mỗi dự đoán đi kèm vùng chú ý, mức tin cậy, lịch sử mô hình và bước xác nhận của con người.",
        "Each prediction includes attention regions, confidence, model history, and human confirmation.",
      ),
      result: text(
        "Prototype giúp người đánh giá xác định ca cần ưu tiên nhanh hơn 28% trên tập dữ liệu mô phỏng.",
        "The prototype helped reviewers flag priority cases 28% faster on a simulated dataset.",
      ),
    },
    visual: {
      motif: "vision",
      primary: "#37b6ff",
      secondary: "#6366f1",
      tertiary: "#fb7185",
    },
    technologies: [
      { name: "Python", category: "backend" },
      { name: "TensorFlow", category: "other" },
      { name: "FastAPI", category: "backend" },
      { name: "React", category: "frontend" },
      { name: "Docker", category: "deployment" },
    ],
    features: [
      {
        title: text("Bản đồ chú ý", "Attention map"),
        description: text(
          "Làm rõ vùng dữ liệu có ảnh hưởng lớn nhất đến dự đoán.",
          "Highlights the regions that most influence each prediction.",
        ),
        icon: "spark",
      },
      {
        title: text("Dấu vết mô hình", "Model trace"),
        description: text(
          "Gắn phiên bản, ngưỡng và dữ liệu đánh giá với mỗi kết quả.",
          "Attaches model version, thresholds, and evaluation data to every result.",
        ),
        icon: "code",
      },
      {
        title: text("Xác nhận hai lớp", "Two-layer review"),
        description: text(
          "Yêu cầu xác nhận chuyên môn trước khi kết quả được ghi nhận.",
          "Requires expert confirmation before a result is recorded.",
        ),
        icon: "shield",
      },
    ],
    gallery: gallery("med-lens-ai", [
      ["Không gian sàng lọc ca", "Case triage workspace"],
      ["Chi tiết vùng chú ý của mô hình", "Model attention detail"],
      ["Quy trình xác nhận kết quả", "Result confirmation workflow"],
    ]),
    challenges: [
      {
        title: text("Giải thích thay vì che giấu", "Explain instead of hide"),
        challenge: text(
          "Một điểm số đơn lẻ tạo cảm giác chắc chắn hơn mức dữ liệu cho phép.",
          "A single score suggested more certainty than the evidence supported.",
        ),
        solution: text(
          "Giao diện hiển thị khoảng tin cậy, trường hợp tương tự và giới hạn của mô hình cạnh nhau.",
          "The interface shows confidence bands, similar cases, and model limits together.",
        ),
      },
    ],
    memberIds: ["minh-anh", "gia-huy", "quang-khang"],
    seo: {
      keywords: ["explainable AI", "computer vision", "research prototype", "TensorFlow"],
    },
  },
  {
    id: "project-circuit-quest",
    slug: "circuit-quest",
    title: text("Circuit Quest", "Circuit Quest"),
    tagline: text(
      "Học tư duy hệ thống qua từng mạch điện sống động.",
      "Learn systems thinking through living circuits.",
    ),
    shortDescription: text(
      "Trò chơi giải đố 2D giúp người học khám phá logic điện tử bằng mô phỏng trực quan.",
      "A 2D puzzle game that teaches electronic logic through visual simulation.",
    ),
    category: "game",
    status: "completed",
    year: 2025,
    featured: true,
    role: text("Game design, lập trình và kiểm thử người chơi", "Game design, engineering, and playtesting"),
    overview: {
      context: text(
        "Các khái niệm mạch điện cơ bản thường được trình bày trừu tượng và khó thử nghiệm.",
        "Fundamental circuit concepts are often presented abstractly and are hard to experiment with.",
      ),
      problem: text(
        "Người học ghi nhớ công thức nhưng chưa hiểu quan hệ nguyên nhân và kết quả.",
        "Learners memorized formulas without understanding cause and effect.",
      ),
      goal: text(
        "Biến mỗi khái niệm thành một thử thách có phản hồi tức thì.",
        "Turn each concept into a challenge with immediate feedback.",
      ),
      audience: text(
        "Học sinh, sinh viên năm nhất và người mới làm quen điện tử.",
        "High-school students, first-year undergraduates, and electronics beginners.",
      ),
      solution: text(
        "Người chơi lắp các khối logic, chạy mô phỏng và quan sát năng lượng đi qua từng nút.",
        "Players assemble logic blocks, run simulations, and watch energy move through each node.",
      ),
      result: text(
        "Sau ba màn hướng dẫn, 82% người thử có thể tự giải thích logic mạch đã tạo.",
        "After three tutorial levels, 82% of testers could explain the circuit logic they built.",
      ),
    },
    visual: {
      motif: "circuit",
      primary: "#1677ff",
      secondary: "#fbbf24",
      tertiary: "#21d4fd",
    },
    technologies: [
      { name: "Godot", category: "other" },
      { name: "GDScript", category: "other" },
      { name: "Aseprite", category: "design" },
      { name: "Figma", category: "design" },
      { name: "GitHub Actions", category: "deployment" },
    ],
    features: [
      {
        title: text("Mô phỏng tức thì", "Instant simulation"),
        description: text(
          "Thay đổi linh kiện và xem tín hiệu phản hồi trong cùng một nhịp chơi.",
          "Change components and see signal feedback within the same play loop.",
        ),
        icon: "spark",
      },
      {
        title: text("Gợi ý theo lớp", "Layered hints"),
        description: text(
          "Gợi mở từng bước mà không đưa ngay đáp án hoàn chỉnh.",
          "Reveals guidance step by step without giving away the full answer.",
        ),
        icon: "layers",
      },
      {
        title: text("Trình dựng màn", "Level builder"),
        description: text(
          "Cho phép giảng viên tạo thử thách theo mục tiêu bài học.",
          "Lets instructors build challenges around learning objectives.",
        ),
        icon: "code",
      },
    ],
    gallery: gallery("circuit-quest", [
      ["Màn chơi lắp ráp mạch", "Circuit assembly level"],
      ["Phản hồi tín hiệu theo thời gian thực", "Real-time signal feedback"],
      ["Trình dựng thử thách", "Challenge builder"],
    ]),
    challenges: [
      {
        title: text("Dạy mà không giảng", "Teach without lecturing"),
        challenge: text(
          "Hướng dẫn dài làm đứt nhịp khám phá và thử sai của người chơi.",
          "Long tutorials interrupted the player's exploration loop.",
        ),
        solution: text(
          "Khái niệm được chia thành cơ chế nhỏ, xuất hiện đúng lúc người chơi cần.",
          "Concepts were split into small mechanics introduced at the moment of need.",
        ),
      },
    ],
    memberIds: ["thao-vy", "quang-khang", "minh-anh"],
    seo: {
      keywords: ["educational game", "Godot", "electronics", "puzzle game"],
    },
  },
  {
    id: "project-lab-sync",
    slug: "lab-sync",
    title: text("Lab Sync", "Lab Sync"),
    tagline: text(
      "Từ thiết bị rời rạc đến một quy trình nghiên cứu liền mạch.",
      "From disconnected equipment to one continuous research flow.",
    ),
    shortDescription: text(
      "Không gian điều phối thiết bị, dữ liệu và phiên làm việc cho phòng thí nghiệm học thuật.",
      "A coordination space for equipment, data, and sessions in academic laboratories.",
    ),
    category: "research",
    status: "in-development",
    year: 2026,
    featured: false,
    role: text("Khảo sát quy trình và xây dựng sản phẩm", "Workflow research and product development"),
    overview: {
      context: text(
        "Lịch thiết bị, sổ ghi chép và tệp kết quả được quản lý bằng nhiều công cụ riêng lẻ.",
        "Equipment schedules, notebooks, and result files lived in separate tools.",
      ),
      problem: text(
        "Nhóm nghiên cứu khó truy vết ai đã sử dụng thiết bị, cấu hình nào và dữ liệu nằm ở đâu.",
        "Research teams struggled to trace users, configurations, and resulting data.",
      ),
      goal: text(
        "Tạo một chuỗi bằng chứng rõ ràng từ đặt lịch đến kết quả cuối.",
        "Create a clear evidence chain from booking to final result.",
      ),
      audience: text(
        "Nghiên cứu viên, kỹ thuật viên phòng lab và giảng viên hướng dẫn.",
        "Researchers, laboratory technicians, and supervisors.",
      ),
      solution: text(
        "Mỗi phiên làm việc liên kết lịch, checklist, cấu hình thiết bị và tệp kết quả trong một hồ sơ.",
        "Each session links booking, checklists, equipment settings, and output files in one record.",
      ),
      result: text(
        "Luồng thử nghiệm giảm 41% thao tác nhập lặp trong bài kiểm tra quy trình nội bộ.",
        "The pilot workflow reduced repeated data entry by 41% in an internal process test.",
      ),
    },
    visual: {
      motif: "research",
      primary: "#6366f1",
      secondary: "#37b6ff",
      tertiary: "#2dd4bf",
    },
    technologies: [
      { name: "Vue", category: "frontend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "MongoDB", category: "database" },
      { name: "Docker", category: "deployment" },
    ],
    features: [
      {
        title: text("Hồ sơ phiên làm việc", "Session record"),
        description: text(
          "Liên kết người dùng, thiết bị, thông số và dữ liệu đầu ra.",
          "Connects people, equipment, settings, and output data.",
        ),
        icon: "layers",
      },
      {
        title: text("Lịch thiết bị", "Equipment calendar"),
        description: text(
          "Phát hiện xung đột và hiển thị thời gian bảo trì ngay khi đặt lịch.",
          "Detects conflicts and exposes maintenance windows during booking.",
        ),
        icon: "chart",
      },
      {
        title: text("Dấu vết thay đổi", "Change trace"),
        description: text(
          "Ghi lại thay đổi quan trọng để hỗ trợ khả năng tái lập.",
          "Records important changes to support reproducibility.",
        ),
        icon: "shield",
      },
    ],
    gallery: gallery("lab-sync", [
      ["Bảng điều phối phòng thí nghiệm", "Laboratory coordination board"],
      ["Hồ sơ phiên nghiên cứu", "Research session record"],
      ["Chuỗi dữ liệu và thiết bị", "Data and equipment chain"],
    ]),
    challenges: [
      {
        title: text("Linh hoạt nhưng có kiểm soát", "Flexible but controlled"),
        challenge: text(
          "Mỗi phòng lab có quy trình khác nhau nhưng vẫn cần dữ liệu nhất quán.",
          "Each lab follows a different process while still requiring consistent data.",
        ),
        solution: text(
          "Checklist được cấu hình theo loại thiết bị nhưng xuất về cùng một cấu trúc nhật ký.",
          "Equipment-specific checklists map into one shared audit structure.",
        ),
      },
    ],
    memberIds: ["gia-huy", "minh-anh", "quang-khang"],
    seo: {
      keywords: ["research workflow", "lab management", "Vue", "reproducibility"],
    },
  },
  {
    id: "project-nova-desk",
    slug: "nova-desk",
    title: text("Nova Desk", "Nova Desk"),
    tagline: text(
      "Một workspace bình tĩnh cho những ngày làm việc nhiều lớp.",
      "A calm workspace for layered workdays.",
    ),
    shortDescription: text(
      "Ứng dụng desktop thử nghiệm gom ghi chú, tác vụ và phiên tập trung theo từng bối cảnh.",
      "A desktop prototype that groups notes, tasks, and focus sessions by context.",
    ),
    category: "desktop",
    status: "prototype",
    year: 2024,
    featured: false,
    role: text("Thiết kế tương tác và phát triển desktop", "Interaction design and desktop development"),
    overview: {
      context: text(
        "Người làm việc tri thức thường mở nhiều công cụ cho cùng một đầu việc.",
        "Knowledge workers often open several tools for one piece of work.",
      ),
      problem: text(
        "Chuyển đổi ngữ cảnh liên tục làm mất mạch suy nghĩ và khó tìm lại tài liệu liên quan.",
        "Constant context switching breaks concentration and makes related material harder to recover.",
      ),
      goal: text(
        "Tạo không gian làm việc nhẹ, ưu tiên sự tập trung thay vì thêm tính năng.",
        "Create a lightweight workspace that prioritizes focus over feature count.",
      ),
      audience: text(
        "Sinh viên, nhà thiết kế và lập trình viên làm việc theo dự án.",
        "Students, designers, and developers who work project by project.",
      ),
      solution: text(
        "Mỗi workspace chứa tài liệu, nhiệm vụ và bộ đếm tập trung; mọi thứ được lưu cục bộ trước.",
        "Each workspace contains references, tasks, and focus timers with a local-first model.",
      ),
      result: text(
        "Người thử nghiệm giảm trung bình bốn lần chuyển ứng dụng trong một phiên 45 phút.",
        "Testers reduced application switching by four times on average in a 45-minute session.",
      ),
    },
    visual: {
      motif: "windows",
      primary: "#37b6ff",
      secondary: "#1677ff",
      tertiary: "#6366f1",
    },
    technologies: [
      { name: "Tauri", category: "other" },
      { name: "Rust", category: "backend" },
      { name: "React", category: "frontend" },
      { name: "SQLite", category: "database" },
      { name: "Figma", category: "design" },
    ],
    features: [
      {
        title: text("Workspace theo bối cảnh", "Context workspaces"),
        description: text(
          "Chỉ hiển thị tài liệu và nhiệm vụ liên quan đến việc đang làm.",
          "Shows only the references and tasks related to the current work.",
        ),
        icon: "layers",
      },
      {
        title: text("Lưu cục bộ trước", "Local first"),
        description: text(
          "Dữ liệu phản hồi tức thì và vẫn truy cập được khi ngoại tuyến.",
          "Data responds instantly and remains available offline.",
        ),
        icon: "shield",
      },
      {
        title: text("Nhịp tập trung", "Focus rhythm"),
        description: text(
          "Phiên làm việc, nghỉ ngắn và tổng kết được kết nối thành một vòng lặp.",
          "Focus, break, and reflection sessions form one continuous loop.",
        ),
        icon: "spark",
      },
    ],
    gallery: gallery("nova-desk", [
      ["Không gian làm việc theo dự án", "Project workspace"],
      ["Chế độ tập trung tối giản", "Minimal focus mode"],
      ["Kiến trúc dữ liệu cục bộ", "Local-first data architecture"],
    ]),
    challenges: [
      {
        title: text("Ít hơn nhưng đủ dùng", "Less, but sufficient"),
        challenge: text(
          "Mỗi tính năng mới có nguy cơ biến sản phẩm thành một công cụ quản lý phức tạp.",
          "Every new feature risked turning the product into another complex manager.",
        ),
        solution: text(
          "Nhóm dùng nguyên tắc một màn hình, một mục tiêu và loại bỏ tính năng không hỗ trợ tập trung.",
          "The team enforced one screen, one goal, and removed features unrelated to focus.",
        ),
      },
    ],
    memberIds: ["thao-vy", "quang-khang"],
    seo: {
      keywords: ["desktop productivity", "Tauri", "local first", "focus app"],
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getRelatedProjects(project: Project, limit = 3) {
  return projects
    .filter((candidate) => candidate.id !== project.id)
    .map((candidate) => ({
      project: candidate,
      score:
        Number(candidate.category === project.category) * 3 +
        candidate.technologies.filter((technology) =>
          project.technologies.some((item) => item.name === technology.name),
        ).length +
        candidate.memberIds.filter((memberId) => project.memberIds.includes(memberId))
          .length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ project: relatedProject }) => relatedProject);
}
