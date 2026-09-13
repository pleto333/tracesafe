export type RequirementId = "DR-01" | "DR-02" | "DR-03" | "DR-04" | "GR-01" | "GR-02" | "GR-03" | "GR-04" | "GR-05";

export type GameCondition = "Baseline" | "Proposed";

export interface Choice {
  id: string;
  text: string;
  nextSceneId: string;
  effect: string;
  feedback: string;
  appliedRequirements?: RequirementId[];
}

export interface Scene {
  id: string;
  title: string;
  context: string;
  decision: string;
  choices: Choice[];
}

export interface RequirementMapping {
  requirementId: RequirementId;
  elements: string[];
  rationale: string;
}

export interface GameSpec {
  id: string;
  condition: GameCondition;
  targetDR: RequirementId;
  targetDRName: string;
  title: string;
  playerRole: string;
  scenarioSummary: string;
  startSceneId: string;
  scenes: Scene[];
  requirementMapping?: RequirementMapping[];
}
