export interface StepItemsProps {
  icon: '/icon/step1.svg' | '/icon/step2.svg' | '/icon/step3.svg';
  title: string;
  desc1: string;
  desc2: string;
}

export default function StepItems(props: Partial<StepItemsProps>) {
  const { icon, title, desc1, desc2 } = props;

  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={icon} width={80} height={80} className="mb-30" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {desc1}
          <br />
          {desc2}
        </p>
      </div>
    </div>
  );
}
