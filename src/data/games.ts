import type { GameSpec } from "../types";

const commonRequirements = ["GR-01", "GR-02", "GR-03", "GR-04", "GR-05"] as const;

const baseGames: GameSpec[] = [
  {
    id: "dr01-baseline",
    condition: "Baseline",
    targetDR: "DR-01",
    targetDRName: "Human Agency and Oversight",
    title: "AI 채용 추천 검토",
    playerRole: "기업 인사 담당자",
    scenarioSummary: "AI 채용 추천 시스템이 지원자 한 명을 낮은 순위로 분류한 상황에서 최종 판단을 수행한다.",
    startSceneId: "dr01-b-s1",
    scenes: [
      {
        id: "dr01-b-s1",
        title: "AI의 탈락 추천",
        context: "AI 채용 시스템은 지원자 A를 낮은 순위로 분류했다. 화면에는 점수와 간단한 사유만 표시되어 있으며, 마감 시간이 가까워지고 있다.",
        decision: "지원자 A에 대한 AI 추천 결과를 어떻게 처리하겠습니까?",
        choices: [
          {
            id: "dr01-b-c1",
            text: "AI 추천을 그대로 수용한다.",
            nextSceneId: "end",
            effect: "지원자 A는 탈락 처리되고 채용 절차는 빠르게 종료된다.",
            feedback: "업무 효율은 높아졌지만 AI 판단에 대한 사람의 검토가 부족해 부적절한 탈락 가능성을 확인하지 못한다."
          },
          {
            id: "dr01-b-c2",
            text: "지원서와 AI 점수를 다시 확인한다.",
            nextSceneId: "end",
            effect: "담당자는 지원자의 경력 공백이 낮은 점수에 크게 반영된 사실을 확인한다.",
            feedback: "추가 확인은 잘못된 자동 판단을 줄이는 데 도움이 되지만, 검토 기준과 개입 절차가 명확하지 않으면 판단이 일관되지 않을 수 있다."
          },
          {
            id: "dr01-b-c3",
            text: "AI 결과를 보류하고 면접 기회를 부여한다.",
            nextSceneId: "end",
            effect: "지원자 A는 추가 평가 대상이 되고 최종 결정은 사람이 검토한다.",
            feedback: "사람의 개입으로 AI 판단을 보완할 수 있지만, 어떤 경우에 개입할지 기준을 정해야 한다."
          }
        ]
      }
    ]
  },
  {
    id: "dr01-proposed",
    condition: "Proposed",
    targetDR: "DR-01",
    targetDRName: "Human Agency and Oversight",
    title: "AI 채용 추천 검토",
    playerRole: "기업 인사 담당자",
    scenarioSummary: "AI 채용 추천 결과를 검토하면서 사람이 AI 판단을 수용, 수정, 보류할 수 있는지 판단한다.",
    startSceneId: "dr01-p-s1",
    scenes: [
      {
        id: "dr01-p-s1",
        title: "검토가 필요한 AI 추천",
        context: "AI 채용 시스템은 지원자 A를 탈락 후보로 추천했다. 근거 항목에는 경력 공백, 과거 직무명, 출신 지역과 연관된 데이터 패턴이 포함되어 있다. 회사 규정상 AI 결과는 참고 자료이며 최종 결정에는 사람의 검토가 필요하다.",
        decision: "책임 있는 채용 결정을 위해 어떤 조치를 취하겠습니까?",
        choices: [
          {
            id: "dr01-p-c1",
            text: "AI 추천을 그대로 승인한다.",
            nextSceneId: "end",
            effect: "빠르게 탈락 처리가 이루어지지만, AI가 고려한 요소의 적절성은 검토되지 않는다.",
            feedback: "DR-01 관점에서 AI 권고를 사람이 검토하지 않고 그대로 수용하면 인간의 감독 기능이 약화된다. 중요한 결정에서는 AI 결과의 한계와 개입 필요성을 확인해야 한다.",
            appliedRequirements: ["DR-01", ...commonRequirements]
          },
          {
            id: "dr01-p-c2",
            text: "판단 근거를 확인하고 사람이 재검토한다.",
            nextSceneId: "end",
            effect: "담당자는 경력 공백의 맥락과 직무 적합성을 추가로 검토하고 AI 추천을 수정한다.",
            feedback: "사람이 AI 판단의 근거를 검토하고 필요한 경우 결정을 수정하는 것은 Human Agency and Oversight를 반영한 선택이다.",
            appliedRequirements: ["DR-01", ...commonRequirements]
          },
          {
            id: "dr01-p-c3",
            text: "해당 추천을 보류하고 평가 기준 개선을 요청한다.",
            nextSceneId: "end",
            effect: "지원자 A의 판단은 보류되고, AI 추천 기준에 대한 검토 절차가 시작된다.",
            feedback: "AI 판단에 문제가 의심될 때 사람의 감독 절차를 통해 결정을 보류하고 시스템 개선을 요청하는 것은 책임 있는 개입 방식이다.",
            appliedRequirements: ["DR-01", ...commonRequirements]
          }
        ]
      }
    ],
    requirementMapping: [
      {
        requirementId: "DR-01",
        elements: ["dr01-p-s1", "dr01-p-c1", "dr01-p-c2", "dr01-p-c3"],
        rationale: "AI 권고를 사람이 수용, 재검토, 보류하는 선택 구조로 인간의 개입과 감독을 표현한다."
      }
    ]
  },
  {
    id: "dr02-baseline",
    condition: "Baseline",
    targetDR: "DR-02",
    targetDRName: "Evidence, Explanation, and Information Verification",
    title: "AI 뉴스 요약 검증",
    playerRole: "온라인 콘텐츠 편집자",
    scenarioSummary: "AI가 작성한 뉴스 요약을 게시하기 전 정보의 근거와 정확성을 확인한다.",
    startSceneId: "dr02-b-s1",
    scenes: [
      {
        id: "dr02-b-s1",
        title: "게시 직전의 AI 요약",
        context: "AI가 사회적 이슈에 대한 뉴스 요약을 생성했다. 문장은 자연스럽지만 일부 수치와 인용 출처가 표시되지 않았다.",
        decision: "AI 요약을 어떻게 처리하겠습니까?",
        choices: [
          { id: "dr02-b-c1", text: "바로 게시한다.", nextSceneId: "end", effect: "콘텐츠가 빠르게 게시된다.", feedback: "근거 확인 없이 AI 결과를 게시하면 부정확한 정보가 확산될 수 있다." },
          { id: "dr02-b-c2", text: "주요 수치와 출처를 확인한다.", nextSceneId: "end", effect: "일부 수치가 원문과 다르다는 점을 발견한다.", feedback: "AI 결과는 그럴듯해 보여도 근거 확인이 필요하다." },
          { id: "dr02-b-c3", text: "논란이 될 표현만 수정한다.", nextSceneId: "end", effect: "표현은 완화되지만 사실관계 오류는 남는다.", feedback: "표현 수정만으로는 정보 검증 문제가 해결되지 않는다." }
        ]
      }
    ]
  },
  {
    id: "dr02-proposed",
    condition: "Proposed",
    targetDR: "DR-02",
    targetDRName: "Evidence, Explanation, and Information Verification",
    title: "AI 뉴스 요약 검증",
    playerRole: "온라인 콘텐츠 편집자",
    scenarioSummary: "AI 요약의 근거, 설명, 출처를 확인하여 게시 여부를 판단한다.",
    startSceneId: "dr02-p-s1",
    scenes: [
      {
        id: "dr02-p-s1",
        title: "근거가 부족한 요약",
        context: "AI는 정책 변화에 관한 뉴스 요약을 생성했다. 요약에는 영향 규모와 전문가 의견이 포함되어 있지만, 원문 링크와 수치 산출 근거가 누락되어 있다.",
        decision: "게시 전에 어떤 검증 절차를 수행하겠습니까?",
        choices: [
          { id: "dr02-p-c1", text: "AI 요약이 자연스러우므로 그대로 게시한다.", nextSceneId: "end", effect: "게시 속도는 빠르지만 잘못된 수치가 포함된다.", feedback: "DR-02 관점에서 설명과 근거가 없는 AI 결과를 그대로 수용하면 정보 검증 책임을 충족하기 어렵다.", appliedRequirements: ["DR-02", ...commonRequirements] },
          { id: "dr02-p-c2", text: "원문과 출처를 대조하고 불확실한 문장을 표시한다.", nextSceneId: "end", effect: "오류가 있는 수치를 수정하고 불확실한 부분을 독자에게 명시한다.", feedback: "근거 확인과 출처 대조는 AI 결과의 신뢰성을 판단하는 핵심 절차이며 DR-02를 충실히 반영한다.", appliedRequirements: ["DR-02", ...commonRequirements] },
          { id: "dr02-p-c3", text: "AI에게 더 자신 있는 표현으로 다시 쓰게 한다.", nextSceneId: "end", effect: "문장은 명확해지지만 근거 부족 문제는 해결되지 않는다.", feedback: "설명력 있는 문장과 사실 검증은 다르다. AI가 더 확신 있게 말해도 외부 근거 확인이 필요하다.", appliedRequirements: ["DR-02", ...commonRequirements] }
        ]
      }
    ],
    requirementMapping: [
      { requirementId: "DR-02", elements: ["dr02-p-s1", "dr02-p-c1", "dr02-p-c2", "dr02-p-c3"], rationale: "AI 결과의 출처, 설명, 정보 검증 여부를 선택과 피드백으로 표현한다." }
    ]
  },
  {
    id: "dr03-baseline",
    condition: "Baseline",
    targetDR: "DR-03",
    targetDRName: "Stakeholder and Affected Groups",
    title: "AI 학습관리 시스템 도입",
    playerRole: "학교 디지털교육 담당자",
    scenarioSummary: "AI 학습관리 시스템 도입이 학생, 교사, 학부모에게 미치는 영향을 검토한다.",
    startSceneId: "dr03-b-s1",
    scenes: [
      {
        id: "dr03-b-s1",
        title: "새 학습관리 시스템",
        context: "학교는 AI 학습관리 시스템을 도입하려 한다. 시스템은 학생의 학습 활동을 분석해 맞춤형 과제를 추천한다.",
        decision: "도입 절차를 어떻게 진행하겠습니까?",
        choices: [
          { id: "dr03-b-c1", text: "성능이 좋으므로 전면 도입한다.", nextSceneId: "end", effect: "빠르게 도입되지만 일부 학생과 교사의 우려가 반영되지 않는다.", feedback: "영향을 받는 집단을 충분히 고려하지 않으면 도입 이후 갈등이 발생할 수 있다." },
          { id: "dr03-b-c2", text: "학생과 교사 의견을 수렴한다.", nextSceneId: "end", effect: "사용 편의성과 감시 우려가 함께 제기된다.", feedback: "이해관계자 의견은 AI 도입 판단에 중요한 정보가 된다." },
          { id: "dr03-b-c3", text: "관리자 회의에서만 결정한다.", nextSceneId: "end", effect: "행정 절차는 단순하지만 실제 사용자 관점이 빠진다.", feedback: "의사결정자가 편해도 영향을 받는 집단이 배제될 수 있다." }
        ]
      }
    ]
  },
  {
    id: "dr03-proposed",
    condition: "Proposed",
    targetDR: "DR-03",
    targetDRName: "Stakeholder and Affected Groups",
    title: "AI 학습관리 시스템 도입",
    playerRole: "학교 디지털교육 담당자",
    scenarioSummary: "AI 시스템 도입으로 영향을 받는 이해관계자와 집단을 식별하고 반영한다.",
    startSceneId: "dr03-p-s1",
    scenes: [
      {
        id: "dr03-p-s1",
        title: "영향 집단 검토",
        context: "AI 학습관리 시스템은 학습 시간을 추적하고 과제를 추천한다. 학교 관리자는 성과 향상을 기대하지만, 학생은 감시받는 느낌을 우려하고 교사는 평가 부담 증가를 걱정한다. 학부모는 데이터 활용 범위를 알고 싶어 한다.",
        decision: "도입 여부를 결정하기 전에 무엇을 우선해야 합니까?",
        choices: [
          { id: "dr03-p-c1", text: "관리자와 공급업체 설명만 듣고 도입한다.", nextSceneId: "end", effect: "운영 계획은 빠르게 정해지지만 학생과 교사의 우려가 누락된다.", feedback: "DR-03 관점에서 일부 의사결정자만 고려하면 영향을 받는 집단의 관점이 반영되지 않는다.", appliedRequirements: ["DR-03", ...commonRequirements] },
          { id: "dr03-p-c2", text: "학생, 교사, 학부모의 영향을 분리해 조사한다.", nextSceneId: "end", effect: "집단별 기대와 우려를 반영하여 제한적 시범 도입안이 마련된다.", feedback: "이해관계자와 영향 집단을 식별하고 각 집단에 미치는 영향을 비교하는 선택은 DR-03을 충실히 반영한다.", appliedRequirements: ["DR-03", ...commonRequirements] },
          { id: "dr03-p-c3", text: "성적 향상 가능성만 기준으로 도입한다.", nextSceneId: "end", effect: "성과 목표는 명확하지만 프라이버시와 학습 부담 문제는 남는다.", feedback: "효과성만으로 판단하면 AI 사용으로 영향을 받는 다양한 집단의 이해를 놓칠 수 있다.", appliedRequirements: ["DR-03", ...commonRequirements] }
        ]
      }
    ],
    requirementMapping: [
      { requirementId: "DR-03", elements: ["dr03-p-s1", "dr03-p-c1", "dr03-p-c2", "dr03-p-c3"], rationale: "학생, 교사, 학부모, 관리자 등 이해관계자를 명시하고 선택 결과에서 집단별 영향을 설명한다." }
    ]
  },
  {
    id: "dr04-baseline",
    condition: "Baseline",
    targetDR: "DR-04",
    targetDRName: "Fairness and Data Representativeness",
    title: "AI 대출 심사 공정성",
    playerRole: "금융 서비스 심사 관리자",
    scenarioSummary: "AI 대출 심사 결과에서 특정 집단의 승인율이 낮게 나타난 상황을 처리한다.",
    startSceneId: "dr04-b-s1",
    scenes: [
      {
        id: "dr04-b-s1",
        title: "낮은 승인율",
        context: "AI 대출 심사 시스템이 일부 지역 신청자에게 낮은 승인 점수를 부여하고 있다. 전체 정확도는 높게 보고되었다.",
        decision: "이 결과를 어떻게 다루겠습니까?",
        choices: [
          { id: "dr04-b-c1", text: "전체 정확도가 높으므로 계속 사용한다.", nextSceneId: "end", effect: "심사는 빠르게 진행되지만 특정 집단의 불이익은 확인되지 않는다.", feedback: "전체 성능만으로는 집단별 공정성 문제를 파악하기 어렵다." },
          { id: "dr04-b-c2", text: "집단별 승인율과 데이터 구성을 확인한다.", nextSceneId: "end", effect: "훈련 데이터에서 일부 지역 신청자 표본이 부족하다는 점을 발견한다.", feedback: "데이터 대표성을 확인하면 불균형한 영향을 줄일 수 있다." },
          { id: "dr04-b-c3", text: "민원이 들어온 사례만 개별 처리한다.", nextSceneId: "end", effect: "일부 민원은 해결되지만 구조적 문제는 남는다.", feedback: "개별 대응만으로는 공정성 문제의 원인을 해결하기 어렵다." }
        ]
      }
    ]
  },
  {
    id: "dr04-proposed",
    condition: "Proposed",
    targetDR: "DR-04",
    targetDRName: "Fairness and Data Representativeness",
    title: "AI 대출 심사 공정성",
    playerRole: "금융 서비스 심사 관리자",
    scenarioSummary: "AI 대출 심사 데이터의 대표성과 집단별 영향을 확인하여 공정한 사용 여부를 판단한다.",
    startSceneId: "dr04-p-s1",
    scenes: [
      {
        id: "dr04-p-s1",
        title: "대표성이 부족한 심사 데이터",
        context: "AI 대출 심사 모델은 높은 전체 정확도를 보였지만, 청년층과 특정 지역 신청자의 승인율이 유사한 조건의 다른 집단보다 낮게 나타났다. 훈련 데이터에는 해당 집단의 사례가 상대적으로 적다.",
        decision: "공정성과 데이터 대표성을 고려해 어떤 조치를 취하겠습니까?",
        choices: [
          { id: "dr04-p-c1", text: "전체 정확도가 높으므로 모델을 그대로 운영한다.", nextSceneId: "end", effect: "운영 효율은 유지되지만 특정 집단의 불이익 가능성이 지속된다.", feedback: "DR-04 관점에서 전체 정확도만 확인하면 데이터 대표성 부족과 집단별 불균형 영향을 놓칠 수 있다.", appliedRequirements: ["DR-04", ...commonRequirements] },
          { id: "dr04-p-c2", text: "집단별 성능과 데이터 대표성을 분석한 뒤 보완한다.", nextSceneId: "end", effect: "부족한 데이터 구간을 확인하고 심사 기준 및 모델 재학습 계획을 수립한다.", feedback: "데이터 품질과 대표성을 검토하고 집단별 영향을 비교하는 것은 공정성 문제를 완화하는 책임 있는 선택이다.", appliedRequirements: ["DR-04", ...commonRequirements] },
          { id: "dr04-p-c3", text: "민원 신청자에게만 예외 심사를 제공한다.", nextSceneId: "end", effect: "일부 사용자는 구제되지만 같은 조건의 다른 신청자는 계속 영향을 받는다.", feedback: "사후 예외 처리만으로는 데이터 대표성에 따른 구조적 불공정성을 해결하기 어렵다.", appliedRequirements: ["DR-04", ...commonRequirements] }
        ]
      }
    ],
    requirementMapping: [
      { requirementId: "DR-04", elements: ["dr04-p-s1", "dr04-p-c1", "dr04-p-c2", "dr04-p-c3"], rationale: "데이터 대표성 부족과 집단별 승인율 차이를 시나리오와 선택 결과로 표현한다." }
    ]
  }
];

const followUpContent: Record<string, { title: string; context: string; decision: string; choices: [string, string, string, string, string, string] }> = {
  "DR-01-Baseline": {
    title: "마감 직전의 재검토 요청",
    context: "지원자는 자신의 평가 결과에 대해 설명을 요청했다. 담당자는 짧은 시간 안에 기존 결정을 유지할지, 추가 검토를 할지 선택해야 한다.",
    decision: "최종 처리 전에 어떤 절차를 선택하겠습니까?",
    choices: ["기존 결정을 유지한다.", "지원자에게 판단 근거를 설명하고 추가 검토한다.", "결과를 보류하고 상급자 검토를 요청한다.", "결정은 빠르지만 이의 제기 절차가 약해진다.", "지원자에게 설명하고 사람의 재검토 절차를 진행한다.", "결정 권한을 명확히 이관하고 감독 기록을 남긴다."]
  },
  "DR-01-Proposed": {
    title: "이의 제기와 인간의 최종 판단",
    context: "지원자는 경력 공백이 개인 사정 때문이며 해당 정보만으로 역량을 판단할 수 없다고 이의를 제기했다. 시스템에는 재검토 사유와 담당자 기록을 남길 수 있다.",
    decision: "인간의 감독과 이의 제기를 반영해 최종 결정을 어떻게 기록하겠습니까?",
    choices: ["AI 점수를 최종 근거로 확정한다.", "이의 내용을 검토하고 판단 사유를 기록한다.", "판단을 보류하고 독립적인 재검토를 요청한다.", "자동화된 점수에 최종 권한을 부여한다.", "사람이 근거를 검토하고 결정을 수정할 수 있게 한다.", "독립 검토와 이력 기록으로 책임소재를 명확히 한다."]
  },
  "DR-02-Baseline": {
    title: "출처가 확인되지 않은 문장",
    context: "원문을 확인하자 AI 요약의 핵심 수치 일부가 원문에 없었다. 게시 일정은 이미 공지된 상태다.",
    decision: "게시 전 정보의 신뢰성을 어떻게 확보하겠습니까?",
    choices: ["일정을 맞추기 위해 게시한다.", "확인된 내용만 남기고 출처를 표시한다.", "게시를 보류하고 사실 확인을 요청한다.", "게시 속도는 높지만 검증되지 않은 주장이 남는다.", "근거가 있는 문장만 게시하고 불확실성을 표시한다.", "검증 완료까지 게시를 보류하여 오류 확산을 막는다."]
  },
  "DR-02-Proposed": {
    title: "검증 결과와 독자에게 제공할 설명",
    context: "원문 대조 결과, AI가 인용한 전문가 의견은 다른 맥락에서 나온 것이었다. 편집자는 수정 이력과 출처를 독자에게 제공할 수 있다.",
    decision: "검증 결과를 콘텐츠에 어떻게 반영하겠습니까?",
    choices: ["문제의 문장만 삭제하고 검증 과정은 남기지 않는다.", "원문 링크와 수정 내용을 함께 표시한다.", "게시를 중단하고 전문가의 재확인을 받는다.", "오류는 줄지만 독자가 수정 근거를 확인하기 어렵다.", "출처와 수정 이력을 제공해 정보 판단을 지원한다.", "추가 확인 후 게시하여 정확성과 설명가능성을 확보한다."]
  },
  "DR-03-Baseline": {
    title: "도입 이후의 현장 반응",
    context: "시스템을 시범 운영하자 학생은 감시를 우려하고, 교사는 추천 결과에 대한 설명을 요구했다.",
    decision: "현장 이해관계자의 반응에 어떻게 대응하겠습니까?",
    choices: ["운영 목표를 위해 그대로 진행한다.", "학생과 교사의 의견을 수집해 운영 방식을 조정한다.", "시범 운영을 중단하고 영향 평가를 실시한다.", "도입은 유지되지만 영향을 받는 집단의 문제 제기가 누적된다.", "현장 의견을 반영해 데이터와 운영 절차를 조정한다.", "영향 평가를 통해 집단별 위험을 확인한 뒤 재설계한다."]
  },
  "DR-03-Proposed": {
    title: "이해관계자별 요구 조정",
    context: "학생은 데이터 수집 최소화를, 교사는 업무 부담 완화를, 학부모는 설명과 통제를 요구한다. 세 요구가 서로 충돌하는 상황이다.",
    decision: "서로 다른 집단의 요구를 어떻게 조정하겠습니까?",
    choices: ["관리자의 운영 편의성을 우선한다.", "집단별 요구를 비교하고 공동 운영 기준을 합의한다.", "영향이 큰 기능의 도입을 보류하고 협의를 계속한다.", "운영은 쉬워지지만 특정 집단의 부담과 우려가 남는다.", "각 집단의 영향을 반영한 참여 절차와 보호 기준을 마련한다.", "위험이 큰 기능을 보류하여 이해관계자와 함께 재검토한다."]
  },
  "DR-04-Baseline": {
    title: "집단별 결과 차이 확인",
    context: "추가 분석에서 특정 지역 신청자의 승인율이 낮고, 해당 집단의 훈련 데이터가 적다는 사실이 확인됐다.",
    decision: "공정성 문제를 발견한 뒤 어떤 조치를 취하겠습니까?",
    choices: ["전체 정확도를 근거로 운영을 계속한다.", "집단별 성능을 보고하고 데이터 보완을 요청한다.", "해당 집단의 신청만 수동 심사한다.", "구조적 문제를 그대로 둔 채 전체 성능만 유지한다.", "집단별 차이와 데이터 부족을 확인해 개선 계획을 세운다.", "일부 신청자뿐 아니라 동일 집단 전체의 영향을 재평가한다."]
  },
  "DR-04-Proposed": {
    title: "보완 데이터와 재평가 계획",
    context: "모델 운영을 잠시 멈추면 심사 지연이 발생하지만, 대표성이 부족한 데이터를 보완하고 집단별 성능을 다시 평가할 수 있다.",
    decision: "공정성 개선을 위해 운영 계획을 어떻게 조정하겠습니까?",
    choices: ["심사 지연을 막기 위해 그대로 운영한다.", "부족한 집단의 데이터를 보완하고 재평가한다.", "임시로 사람의 검토를 추가하고 모델 개선을 병행한다.", "효율성은 유지되지만 집단별 불이익 가능성이 지속된다.", "대표성 보완과 성능 재평가를 거쳐 운영 여부를 결정한다.", "인간 검토로 피해를 줄이면서 모델 개선을 병행한다."]
  }
};

export const games: GameSpec[] = baseGames.map((game) => {
  const key = `${game.targetDR}-${game.condition}`;
  const content = followUpContent[key];
  if (!content) return game;

  const followUpId = `${game.id}-s2`;
  const firstScene = game.scenes[0];
  const updatedFirstScene = {
    ...firstScene,
    choices: firstScene.choices.map((choice) => ({ ...choice, nextSceneId: followUpId }))
  };
  const followUpChoices = [0, 1, 2].map((index) => ({
    id: `${game.id}-s2-c${index + 1}`,
    text: content.choices[index],
    nextSceneId: "end",
    effect: content.choices[index + 3],
    feedback: game.condition === "Proposed"
      ? `두 번째 선택에서도 ${game.targetDR} 요구사항을 확인하고, 선택의 영향과 후속 조치를 기록해야 한다.`
      : "후속 절차를 명확히 하지 않으면 선택의 영향과 책임 범위를 확인하기 어렵다.",
    ...(game.condition === "Proposed" ? { appliedRequirements: [game.targetDR, ...commonRequirements] } : {})
  }));

  return {
    ...game,
    scenes: [updatedFirstScene, { id: followUpId, title: content.title, context: content.context, decision: content.decision, choices: followUpChoices }]
  };
});
