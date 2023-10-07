import Link from 'next/link';
import { Section } from '../components/section/Section';
import { Pedestal } from '../components/pedestal/Pedestal';
import { Details } from '../components/details/Details';

const Home = () => {
  return (
    <div className="h-full bg-white text-lg md:py-16 space-y-56">
      <div className="px-5 w-full max-w-2xl text-center mx-auto space-y-10">
        <h1 className="font-medium text-5xl text-neutral-900">Me, You, We!</h1>
        <p className="text-2xl leading-loose">
          We help people learn about the open source movement and guide them to
          their first contribution.
        </p>
        <div className="space-x-6">
          <Link href="/contribute" className="button w-fit">Contribute</Link>
          <Link href="/read" className="soft-button w-fit">Read</Link>
        </div>
      </div>

      <Section
        title="Benefits"
        class="px-10 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24"
      >
        <Pedestal title="Security" emoji="🔒">
          Open source tend to lead to less vulnerabilities due to the many
          people that search to solve them.
        </Pedestal>
        <Pedestal title="Transparency" emoji="🔍">
          Users trust open source software more often with their privacy because
          they can examine the underlying code.
        </Pedestal>
        <Pedestal title="Community Support" emoji="🤝">
          Open source projects are backed active communities of developers. They
          ensure ongoing development, bug fixes, and documentation.
        </Pedestal>
        <Pedestal title="Cost-Effective" emoji="💰">
          Open software are often free to use which can reduce development and
          operational costs. Especially for organizations.
        </Pedestal>

        <Pedestal title="Customization" emoji="🔧">
          Developers can adapt the software to their unique requirements,
          leading to highly tailored solutions.
        </Pedestal>

        <Pedestal title="Innovation" emoji="🚀">
          Open source enable developers to build upon existing projects. Leading
          to the creation of new features and solutions at an accelerated pace.
        </Pedestal>
      </Section>

      <Section
        title="Frequently asked questions"
        titleClass="text-center"
        class="px-10 space-y-12"
      >
        <Details title="What is this website about?">
          <p>
            This website is about promoting the open source movement and
            ideology by various means.
          </p>
          <p>
            First, we help developers join the community by contributing to
            projects. Then, we suggest free and open source alternatives to
            proprietary software. Finally, we educate people on the history of
            open source.
          </p>
        </Details>
        <Details title="What is open source?">
          There are multiple definitions of open source based on what you are
          talking about and your values. In most cases, it is used to denote
          software for which the original source code is made freely available
          and may be redistributed and modified.
        </Details>
        <Details title="What does such abbreviation mean?">
          <ul>
            <li>
              <abbr title="Open Source Software">OSS</abbr>: Open Source
              Software
            </li>
            <li>
              <abbr title="Free Open Source Software">FOSS</abbr>: Free and Open
              Source Software
            </li>
            <li>
              <abbr title="Free/Libre and Open Source Software">FLOSS</abbr>:
              Free/Libre and Open Source Software
            </li>
          </ul>
        </Details>
      </Section>
    </div>
  );
};

export default Home;
