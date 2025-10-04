type BreadcrumbProps = {
  text: string
}

export default function Breadcrumb({ text }: BreadcrumbProps) {
  return (
    <div className='w-full flex mb-2'>
      <h2 className='bg-[var(--secondary-main-01)] px-2 border-r-2 border-r-[var(--secondary-main)] text-[var(--secondary-main)]'>
        {text}
      </h2>
    </div>
  )
}
