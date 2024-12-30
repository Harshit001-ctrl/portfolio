export default function SplineBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <spline-viewer
        className="w-full h-full pointer-events-auto"
        url="https://prod.spline.design/tnncsZa3g99aVmfi/scene.splinecode"
      />
    </div>
  );
}