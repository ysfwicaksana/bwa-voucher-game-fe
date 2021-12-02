interface PurchaseDetailProps {
  label: string;
  value: string | number;
  bold?: boolean;
}

export default function PurchaseDetail(props: Partial<PurchaseDetailProps>) {
  const { label, value, bold } = props;

  if (bold) {
    return (
      <p className="text-lg color-palette-1 mb-20">
        {label}
        <span className="purchase-details color-palette-4">{value}</span>
      </p>
    );
  }
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className="purchase-details">{value}</span>
    </p>
  );
}
