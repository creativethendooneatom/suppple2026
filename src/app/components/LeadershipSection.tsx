import { Linkedin, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import goitseKonopiImg from 'figma:asset/1991109401c94ed7cf0b3f3064a5c1c6ea670ff4.png';
import phillipChaukeImg from 'figma:asset/cc0b9900d37fc28609838772433a1e58f0663428.png';
import leaAnneMosesImg from 'figma:asset/22ae7a4b8de1afffe70b6ec1a19f0332a3710d5c.png';
// import sarahMitchellImg from 'figma:asset/82a33862dcddcab8b3e9ac7960dc24d6577d122d.png';
// import mariaRodriguezImg from 'figma:asset/e2632e7dfe34966fabf1db2227321ed1111381bd.png';
import paliLehohlaImg from 'figma:asset/fcdb6b7157f45fb37ab58704980f77b0ae54a4bb.png';
import lwaziManziImg from 'figma:asset/82a33862dcddcab8b3e9ac7960dc24d6577d122d.png';
import marinaShortImg from 'figma:asset/e2632e7dfe34966fabf1db2227321ed1111381bd.png';
import randallCarolissenImg from 'figma:asset/9736a521df3514cbe5baa43be8950201687822f1.png';

export function LeadershipSection() {
  const leaders = [
    {
      name: 'Goitse Konopi',
      position: 'Group Chief Executive Officer',
      bio: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions. Goitse has been instrumental in growing Suppple Group into a global leader in sports betting and iGaming technology.',
      expertise: ['Strategic Leadership', 'Market Expansion', 'Product Innovation'],
      image: goitseKonopiImg,
      linkedin: 'https://www.linkedin.com/in/goitsekonopi/',
    },
    {
      name: 'Phillip Chauke',
      position: 'Chief Financial Officer',
      bio: 'Phillip brings extensive financial expertise and has been key in navigating Suppple Group through its successful LUXSE listing. He oversees all financial operations and investor relations.',
      expertise: ['Financial Strategy', 'Public Markets', 'M&A'],
      image: phillipChaukeImg,
      linkedin: 'https://www.linkedin.com/in/phillipchauke/',
    },
    {
      name: 'Lea-Anne Moses',
      position: 'Chief Operating Officer',
      bio: 'Lea-Anne is responsible for the operational excellence across all Suppple Group brands, ensuring seamless customer experiences and operational efficiency at scale.',
      expertise: ['Operations', 'Technology', 'Customer Service'],
      image: leaAnneMosesImg,
      linkedin: 'https://www.linkedin.com/in/lea-anne-moses/',
    },
    {
      name: 'Ochechuku Okere',
      position: 'Head of AI Technology',
      bio: 'Ochechuku leads the technology vision and innovation strategy, driving the development of cutting-edge platforms that power millions of transactions daily.',
      expertise: ['Technology Innovation', 'Platform Development', 'Security'],
    },
    {
      name: 'B.',
      position: 'Chief Legal & Compliance Officer',
      bio: 'B. ensures Suppple Group maintains the highest standards of regulatory compliance across all jurisdictions, managing licensing and legal affairs globally.',
      expertise: ['Regulatory Compliance', 'Licensing', 'Corporate Governance'],
    },
    {
      name: 'Tamoledi',
      position: 'Head of Gaming',
      bio: 'Tamoledi drives the marketing strategy across all brands, building strong customer relationships and expanding market presence through innovative campaigns.',
      expertise: ['Brand Strategy', 'Digital Marketing', 'Customer Acquisition'],
    },
  ];

  const boardMembers = [
    {
      name: 'Goitse Konopi',
      position: 'Executive Director',
      background: 'Brings product and engineering vision to the board. As CEO, his track record spans civic-tech, public infrastructure, and digital platforms serving millions. Goitse has been instrumental in growing Suppple Group into a global leader in sports betting and iGaming technology.',
      image: goitseKonopiImg,
    },
    {
      name: 'Pali Lehohla',
      position: 'Independent Non-Executive Chairman',
      background: 'South Africa\'s longest-serving Statistician-General and a global voice in public policy, data, and governance. He has chaired the UN Statistics Commission and co-chaired PARIS21. His systems-level insight anchors Suppple\'s institutional and policy alignment.',
      image: paliLehohlaImg,
    },
    {
      name: 'Lwazi Manzi',
      position: 'Independent Non-Executive Director',
      background: 'Leads public health and strategy at continental scale as Head of the AU\'s COVID19 Secretariat. A physician by training, she guides Suppple\'s infrastructure work across health, data, and compliance.',
      image: lwaziManziImg,
    },
    {
      name: 'Randall Carolissen',
      position: 'Independent Non-Executive Director',
      background: 'Former Dean of Johannesburg Business School and past administrator of NSFAS. His expertise spans public finance, governance, and digital transformation in education.',
      image: randallCarolissenImg,
    },
    {
      name: 'Marina Short',
      position: 'Independent Non-Executive Director',
      background: 'Former Chair of South Africa\'s Credit Bureau Association and Former CEO of the Consumer Profile Bureau. She brings regulatory, analytics, and financial system insight to Suppple\'s growth strategy.',
      image: marinaShortImg,
    },
  ];

  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Executive Leadership */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Executive Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, finance, operations, and the gaming industry.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center overflow-hidden">
                {leader.image ? (
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/30">
                    <span className="text-5xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{leader.position}</p>
                <p className="text-gray-600 mb-4 text-sm">{leader.bio}</p>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Areas of Expertise:</div>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  {leader.linkedin ? (
                    <a 
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm"
                    >
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </a>
                  ) : (
                    <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                      <Linkedin size={16} />
                      <span>LinkedIn</span>
                    </button>
                  )}
                  <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <Mail size={16} />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Board of Directors */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Board of Directors
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our independent board members bring diverse perspectives and deep expertise to guide Suppple Group's strategic direction and ensure robust corporate governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-600 to-gray-800">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                    <p className="text-gray-600">{member.background}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Corporate Governance</h4>
                <p className="text-sm text-gray-600">
                  Learn more about our governance framework, board committees, and policies
                </p>
              </div>
              <button 
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                onClick={() => alert('Corporate Governance Documents - This would open governance documents in a production environment')}
              >
                View Governance Documents
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}